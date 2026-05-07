import os
import sys

# Ensure the working directory is the directory of this script
os.chdir(os.path.dirname(os.path.abspath(__file__)))

from flask import Flask, render_template, request, redirect, url_for, session, flash, send_from_directory, jsonify
from user_manager import UserManager
from post_manager import PostManager
from forum_manager import ForumManager
from dsa_engine import DSAEngine
from werkzeug.utils import secure_filename

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__, 
            template_folder=os.path.join(BASE_DIR, 'templates'),
            static_folder=os.path.join(BASE_DIR, 'static'))
app.secret_key = "secret_artmash"
app.config['UPLOAD_FOLDER'] = os.path.join(BASE_DIR, 'uploads')
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB limit

# Route to serve uploaded files
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

user_manager = UserManager()
post_manager = PostManager()
forum_manager = ForumManager()


@app.route("/")
def home():
    if "user" in session:
        return redirect(url_for("feed"))
    return render_template("Homepage.html")


# register account
@app.route("/register", methods=["POST"])
def register():
    email = request.form["email"]
    username = request.form["username"]
    fullname = request.form["fullname"]
    password = request.form["password"]

    hashed_password = DSAEngine.sha256_hash(password)

    success = user_manager.register_user(
        email,
        username,
        fullname,
        hashed_password
    )

    if success:
        # Automatically log in the user after registration
        session["user"] = username
        flash("Registration successful!")
        return redirect(url_for("feed"))

    flash("Username already exists. Please choose another one.")
    return redirect(url_for("home"))


# login
@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]

    if user_manager.authenticate(username, password):
        session["user"] = username
        return redirect(url_for("feed"))

    flash("Invalid username or password.")
    return redirect(url_for("home"))


@app.route("/feed")
def feed():
    if "user" not in session:
        return redirect(url_for("home"))
    
    sort_by = request.args.get('sort', 'newest')
    shuffle = request.args.get('shuffle', 'false') == 'true'
    
    posts = post_manager.get_feed(sort_by=sort_by, shuffle=shuffle)
    trending = post_manager.get_trending(5)
    
    # Enrich posts
    for post in posts:
        post['profile_pic'] = user_manager.users.get(post['username'], {}).get('profile_pic')
        post['liked'] = session['user'] in post.get('liked_by', [])
        if 'comments' in post:
            for comment in post['comments']:
                comment['profile_pic'] = user_manager.users.get(comment['username'], {}).get('profile_pic')
                
    return render_template("feed.html", posts=posts, trending=trending, user=session['user'])


@app.route("/explore")
def explore():
    if "user" not in session:
        return redirect(url_for("home"))
    
    # Shuffle posts randomly on each load
    posts = post_manager.get_feed(shuffle=True)
    return render_template("explore.html", posts=posts, user=session['user'])


@app.route("/upload", methods=["GET", "POST"])
def upload():
    if "user" not in session:
        return redirect(url_for("home"))

    if request.method == "POST":
        if 'file' not in request.files:
            return "No file part"
        file = request.files['file']
        if file.filename == '':
            return "No selected file"
        
        if file:
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            
            title = request.form.get('title')
            description = request.form.get('description')
            tags = request.form.get('tags', '').split(',')
            tags = [t.strip() for t in tags if t.strip()]
            
            category = request.form.get('category', 'Digital Art')
            license = request.form.get('license', 'Standard')
            price = request.form.get('price', type=float, default=0.0)
            is_mature = request.form.get('is_mature') == 'on'

            post_manager.create_post(
                username=session['user'],
                title=title,
                description=description,
                image_url=url_for('uploaded_file', filename=filename),
                tags=tags,
                category=category,
                license=license,
                price=price,
                is_mature=is_mature
            )
            return redirect(url_for('feed'))

    return render_template("upload.html")


@app.route("/profile/<username>")
def profile(username):
    if "user" not in session:
        return redirect(url_for("home"))
    
    user_posts = post_manager.get_user_posts(username)
    user_data = user_manager.users.get(username, {})
    return render_template("profile.html", username=username, posts=user_posts, user=session['user'], user_data=user_data)

@app.route("/upload_avatar", methods=["POST"])
def upload_avatar():
    if "user" not in session:
        return redirect(url_for("home"))
    
    file = request.files.get("avatar")
    if file and file.filename:
        filename = f"avatar_{session['user']}_{file.filename}"
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        profile_pic_url = f"/uploads/{filename}"
        user_manager.update_user(session['user'], {"profile_pic": profile_pic_url})
        flash("Profile picture updated!")
    
    return redirect(url_for("profile", username=session['user']))

@app.route("/search")
def search():
    if "user" not in session:
        return redirect(url_for("home"))
        
    query = request.args.get('q', '')
    category_filter = request.args.get('category', '')
    
    results = post_manager.search_posts(query) if query else post_manager.posts
    
    if category_filter:
        results = [p for p in results if p.get('category') == category_filter]
        
    return render_template("search.html", posts=results, query=query, category=category_filter, user=session['user'])

@app.route("/post/<int:post_id>")
def post_detail(post_id):
    if "user" not in session:
        return redirect(url_for("home"))
    
    post = post_manager.get_post(post_id)
    if not post:
        return "Post not found", 404
        
    return render_template("deviation.html", post=post, user=session['user'])


@app.route("/like/<int:post_id>")
def like_post(post_id):
    if "user" not in session:
        return jsonify({"error": "Unauthorized"}), 401
    
    new_likes = post_manager.like_post(post_id, session['user'])
    if new_likes is not None:
        return jsonify({"likes": new_likes})
    return jsonify({"error": "Post not found"}), 404

@app.route("/delete_post/<int:post_id>", methods=["POST"])
def delete_post(post_id):
    if "user" not in session:
        return jsonify({"error": "Unauthorized"}), 401
    
    if post_manager.delete_post(post_id, session['user']):
        return jsonify({"success": True})
    return jsonify({"error": "Post not found or unauthorized"}), 404

@app.route("/comment/<int:post_id>", methods=["POST"])
def add_comment_api(post_id):
    if "user" not in session:
        return jsonify({"error": "Unauthorized"}), 401
    
    content = request.json.get('content')
    if not content:
        return jsonify({"error": "Empty content"}), 400
        
    comment = post_manager.add_comment(post_id, session['user'], content)
    if comment:
        return jsonify(comment)
    return jsonify({"error": "Post not found"}), 404


@app.route("/forums")
def forums():
    if "user" not in session:
        return redirect(url_for("home"))
    
    threads = forum_manager.get_threads()
    categories = ["Art Showcase", "Technical Help", "Commissions", "Lounge"]
    return render_template("forums.html", threads=threads, categories=categories, user=session['user'])

@app.route("/forums/<category>")
def forum_category(category):
    if "user" not in session:
        return redirect(url_for("home"))
    
    threads = forum_manager.get_threads(category=category)
    return render_template("forums.html", threads=threads, current_category=category, user=session['user'])

@app.route("/forums/thread/<int:thread_id>")
def thread_detail(thread_id):
    if "user" not in session:
        return redirect(url_for("home"))
    
    thread = forum_manager.get_thread_by_id(thread_id)
    if not thread:
        return "Thread not found", 404
    return render_template("thread_detail.html", thread=thread, user=session['user'])

@app.route("/forums/create", methods=["POST"])
def create_thread():
    if "user" not in session:
        return redirect(url_for("home"))
    
    title = request.form.get("title")
    category = request.form.get("category")
    content = request.form.get("content")
    
    forum_manager.create_thread(session['user'], category, title, content)
    return redirect(url_for("forums"))

@app.route("/forums/reply", methods=["POST"])
def add_reply():
    if "user" not in session:
        return redirect(url_for("home"))
    
    thread_id = int(request.form.get("thread_id"))
    content = request.form.get("content")
    
    forum_manager.add_reply(thread_id, session['user'], content)
    return redirect(url_for("thread_detail", thread_id=thread_id))

@app.route("/forums/vote/<int:thread_id>")
def vote_thread(thread_id):
    if "user" not in session:
        return redirect(url_for("home"))
    
    forum_manager.vote_thread(thread_id)
    return redirect(request.referrer or url_for('forums'))


@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
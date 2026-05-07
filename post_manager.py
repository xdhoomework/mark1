import json
import os
import time
from dsa_engine import DSAEngine

class PostManager:
    def __init__(self, file_path=None):
        if file_path is None:
            file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "posts.json")
        self.file_path = file_path
        if not os.path.exists(self.file_path):
            with open(self.file_path, "w") as f:
                json.dump([], f)
        self.posts = self.load_posts()
        self.trending_heap = DSAEngine.MaxHeap()
        self._rebuild_trending_heap()

    def load_posts(self):
        with open(self.file_path, "r") as f:
            return json.load(f)

    def save_posts(self):
        with open(self.file_path, "w") as f:
            json.dump(self.posts, f, indent=4)

    def _rebuild_trending_heap(self):
        self.trending_heap = DSAEngine.MaxHeap()
        for post in self.posts:
            # Priority based on likes and recency (simple rule)
            priority = post.get('likes', 0) + (1 / (time.time() - post.get('timestamp', 0) + 1))
            self.trending_heap.insert(post, priority)

    def create_post(self, username, title, description, image_url, tags, category="Digital Art", license="Standard", price=0.0, is_mature=False):
        post = {
            "id": len(self.posts) + 1,
            "username": username,
            "title": title,
            "description": description,
            "image_url": image_url,
            "tags": tags,
            "category": category,
            "license": license,
            "price": price,
            "is_mature": is_mature,
            "likes": 0,
            "liked_by": [],
            "comments": [],
            "timestamp": time.time()
        }
        self.posts.append(post)
        self.save_posts()
        self._rebuild_trending_heap()
        return post

    def get_feed(self, sort_by="newest", shuffle=False):
        """Returns sorted/shuffled feed using DSAEngine."""
        feed = list(self.posts)
        if shuffle:
            return DSAEngine.fisher_yates_shuffle(feed)
        
        if sort_by == "newest":
            return DSAEngine.merge_sort(feed, key=lambda x: x['timestamp'])[::-1]
        elif sort_by == "popularity":
            return DSAEngine.quick_sort(feed, key=lambda x: x['likes'])
        
        return feed

    def get_trending(self, n=5):
        """Returns top N trending posts using Max-Heap."""
        return [p['item'] for p in self.trending_heap.get_top_n(n)]

    def get_post(self, post_id):
        for post in self.posts:
            if post['id'] == post_id:
                return post
        return None

    def like_post(self, post_id, username):
        for post in self.posts:
            if post['id'] == post_id:
                if 'liked_by' not in post:
                    post['liked_by'] = []
                
                if username in post['liked_by']:
                    post['liked_by'].remove(username)
                else:
                    post['liked_by'].append(username)
                
                post['likes'] = len(post['liked_by'])
                self.save_posts()
                self._rebuild_trending_heap()
                return post['likes']
        return None

    def get_user_posts(self, username):
        return [p for p in self.posts if p['username'] == username]

    def search_posts(self, query):
        """Search by tag or title using linear search (as a fallback)."""
        results = []
        for post in self.posts:
            if query.lower() in post['title'].lower() or any(query.lower() in t.lower() for t in post.get('tags', [])):
                results.append(post)
        return results
    def add_comment(self, post_id, username, content):
        for post in self.posts:
            if post['id'] == post_id:
                if 'comments' not in post:
                    post['comments'] = []
                comment = {
                    "username": username,
                    "content": content,
                    "timestamp": time.time()
                }
                post['comments'].append(comment)
                self.save_posts()
                return comment
        return None

    def delete_post(self, post_id, username):
        for i, post in enumerate(self.posts):
            if post['id'] == post_id and post['username'] == username:
                self.posts.pop(i)
                self.save_posts()
                self._rebuild_trending_heap()
                return True
        return False

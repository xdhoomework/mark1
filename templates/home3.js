function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const randomNumberlikes = getRandomNumber(1495, 987182);
const randomNumbercoments = getRandomNumber(58, 2346);
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let btnNotifications = document.getElementById('btnNotificationsinfo');
    let notificationPanel = document.querySelector('.notificactionpanel');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnNotifications && notificationPanel) { // Check if both elements exist
        btnNotifications.addEventListener('click', function() {
            if (!isPanelVisible) {
                notificationPanel.style.marginLeft = '245px';
                isPanelVisible = true;
            } else {
                notificationPanel.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: 49851,
            comments: 469,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow2").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: 49851,
            comments: 469,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev2").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow3").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrow4").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let postdata = JSON.parse(localStorage.getItem('postdata')) || [
        {
            reel:[
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/main/video/videoplayback.mp4" }
            ] ,
            likes: randomNumberlikes,
            comments: randomNumbercoments,
            posts: [
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
                { url: "https://raw.githubusercontent.com/thianeshwarr/id/refs/heads/main/image/Promare-1-1536x864.png" },
            ]
        }
    ];
    var clutter = "";
    postdata.forEach(function(elem, idx) {
        const randomReelIndex = Math.floor(Math.random() * elem.reel.length);
        const randomReelUrl = elem.reel[randomReelIndex].url;
        postdata.forEach(user => {
            if (Array.isArray(user.posts) && user.posts.length > 0) {
                const randomIndexfor1 = Math.floor(Math.random() * user.posts.length); 
                const randomIndexfor2 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor3 = Math.floor(Math.random() * user.posts.length);
                const randomIndexfor4 = Math.floor(Math.random() * user.posts.length);
                const randomPost1 = user.posts[randomIndexfor1];
                const randomPost2 = user.posts[randomIndexfor2];
                const randomPost3 = user.posts[randomIndexfor3];
                const randomPost4 = user.posts[randomIndexfor4];
                const randomPostUrl1 = randomPost1.url;
                const randomPostUrl2 = randomPost2.url;
                const randomPostUrl3 = randomPost3.url;
                const randomPostUrl4 = randomPost4.url;
                clutter += `<div id="postsbox">
                    <div id="postsbox-1strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl1}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl2}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div id="postsbox-2strow">
                        <div id="post-like-absolute"><img src="${randomPostUrl3}" alt="">
                            <div class="post-like-absolute"><button><i class="fa-solid fa-heart"></i></button> 5647 <button><i class="fa-solid fa-comment"></i></button> 679</div>
                        </div>
                        <div id="post-like-absolute"><img src="${randomPostUrl4}" alt="">
                            <div class="post-like-absolute">
                                <button><i class="fa-solid fa-heart"></i></button>
                                <span id="likesCount">${elem.likes}</span>
                                <button><i class="fa-solid fa-comment"></i></button>
                                <span id="commentsCount">${elem.comments}</span>
                            </div>
                            </div>
                            </div>
                            </div>
                    <div id="reelsbox">
                        <div id="reel-like-absolute">
                            <video src="${randomReelUrl}" controls autoplay muted loop style="width: 100%; height: 100%; object-fit: cover;"></video>
                        </div>
                    </div>`;
            }
        });
    });
    document.querySelector("#postwithreelrowrev4").innerHTML = clutter;
});
document.addEventListener('DOMContentLoaded', function() {
    let btnNotifications = document.getElementById('btnNotificationsinfo');
    let notificationPanel = document.querySelector('.notificactionpanel');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnNotifications && notificationPanel) { // Check if both elements exist
        btnNotifications.addEventListener('click', function() {
            if (!isPanelVisible) {
                notificationPanel.style.marginLeft = '245px';
                isPanelVisible = true;
            } else {
                notificationPanel.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
{ function generateRandomValue() {
        return Math.floor(Math.random() * 9) + 1;
    }
    document.addEventListener('DOMContentLoaded', function() {
        let notificationsdata = JSON.parse(localStorage.getItem('notificationsdata')) || [
            {
                user: "sonam_chavan09",
                dp: "https://i.pinimg.com/736x/06/9e/00/069e008833a8f421133121e49a5b493a.jpg",
                preview: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
            },
            {
                user: "dream_girl_janvi075",
                dp: "https://images.saatchiart.com/saatchi/1122046/art/10038751/9101669-QZUCGYJW-7.jpg",
                preview: "https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png",
            },
            {
                user: "rajani_sharma",
                dp: "https://images.unsplash.com/photo-1615022702095-ff2c036f3360?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "mohit_chikara99",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3KuZmc-fVQ6_yHzGKlOkJ2-fy32nbAW6hT84cD6K_Q&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "swati_patil_",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8cl4P1k7pgtOSdnf4cJkzJdhG58M09Ul9jktQX_bMA&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdWEBtx74EINLFCjCz31q0wqZoNXqjwB0hPkXMwKbpA&s",
            },
            {
                user: "ojawi88",
                dp: "https://i.pinimg.com/474x/06/61/4a/06614ac957c2aef663e4054e6e7bc164.jpg",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRXDtE8HTmwxuI10Qi4TZCBnAwgz0PHIpBBJp-u8lhw&s",
            },
            {
                user: "rajesh915",
                dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29VPSfrsY-c6hsJg2BBGIDUPY4RmjBZb1vwsMhyFzGw&s",
                preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdWEBtx74EINLFCjCz31q0wqZoNXqjwB0hPkXMwKbpA&s",
            },
        ];
        let clutter_notifications = "";
        notificationsdata.forEach(function(elem, idx) {
            const randomNumber = generateRandomValue()
            clutter_notifications += ` <div id="likenotifi">
            <div id="dpimageinnoti"><img src="${elem.dp}" alt=""></div>
            <div id="infoinnoti">
                <div id="infoinnotiupper"><h6>${elem.user}</h6><p> liked your reel.</p></div>
    <p id="day-timeinnoti">${randomNumber}hr</p>              
            </div>
            <div id="post-previve"> <img src="${elem.preview}" alt="" ></div>
            </div>`;
        });
        document.querySelector(".notoficationprofils").innerHTML = clutter_notifications;
    });
}
// Define the function to generate a random value between 1 and 9
function generateRandomValue() {
    return Math.floor(Math.random() * 9) + 1;
}
// Add an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    let notificationsdatafollow = JSON.parse(localStorage.getItem('notificationsdatafollow')) || [
        {
            user: "shabana_sharma99",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNwPd2yvMrFk1jk5u9D0xoQcIqHpnMq5kPeHA9F8tig&s",
        },
        {
            user: "roshani.jha007",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcwCN_O9I0L5WJzKq0YleSmw6CVSCeYbK7CAOcZFPmw&s",
        },
        {
            user: "rohit.lakha",
            dp: "https://i.pinimg.com/736x/c5/d9/2f/c5d92f685f2bfbe8867376e937eb9309.jpg",
        },
        {
            user: "joy_sharma_999",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh96St2vUaXDsQ2XUM3-VLqENf8RmFVfQX2DQeNcxvQ&s",
        },
        {
            user: "prakash_rathi505",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNbhCon7-W5aLw36pgxnihglQc-X4e-UMWbJVUtjhpA&s",
        },
        {
            user: "harshita_joshi55",
            dp: "https://i.pinimg.com/736x/3e/31/00/3e3100c71dacaa22de996dcaade4504e.jpg",
        },
        {
            user: "kashvi_aochar7",
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsURPBNwCU_9tkPTu1Jcz-I_ZIGysUSXY2LInGIgiVog&s",
        }
    ];
    let clutter_notificationsfollow = "";
    notificationsdatafollow.forEach(function(elem, idx) {
        const randomNumber = generateRandomValue();
        clutter_notificationsfollow += ` <div id="follownotifi">
        <div id="dpimageinnoti"><img src="${elem.dp}" alt=""></div>
        <div id="infoinnoti">
            <div id="infoinnotiupperfollw"><h6>${elem.user}</h6></div>
            <div id="infoinnotilower"> <p id="startfollo"> started following you.</p> <p id="day-timeinnotiinfollow">${randomNumber}d</p> </div>    
        </div>
        <div id="follow-follwing">
            <button id="noti-follow">Follow</button>
            <button id="noti-following">Following</button>
        </div>
    </div>`;
    });
    document.querySelector(".notoficationprofilsforfollows").innerHTML = clutter_notificationsfollow;
});
let btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click', function() {
    window.location.href = "feed.html";
});
let btnExplore = document.getElementById('btnExplore');
btnExplore.addEventListener('click', function() {
    window.location.href = "explore.html";
});
// Removed the event listener for btnNotificationsinfo
// let btnNotifications = document.getElementById('btnNotificationsinfo');
// btnNotifications.addEventListener('click', function() {
//     window.location.href = "reels.html";
// });
let btnMessages = document.getElementById('btnMessages');
btnMessages.addEventListener('click', function() {
    window.location.href = "messages.html";
});
let profileDpbtns = document.getElementById('profileDpbtns');
profileDpbtns.addEventListener('click', function() {
    window.location.href = "profile.html";
});
document.addEventListener('DOMContentLoaded', function() {
    let btnNotifications = document.getElementById('btnNotificationsinfo');
    let notificationPanel = document.querySelector('.notificactionpanel');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnNotifications && notificationPanel) { // Check if both elements exist
        btnNotifications.addEventListener('click', function() {
            if (!isPanelVisible) {
                notificationPanel.style.marginLeft = '245px';
                isPanelVisible = true;
            } else {
                notificationPanel.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let btnCreate = document.getElementById('btnCreate');
    let createfunction = document.querySelector('.createfunction');
    let isPanelVisible = false; // Flag to track the panel visibility
    if (btnCreate && createfunction) { // Check if both elements exist
        btnCreate.addEventListener('click', function() {
            if (!isPanelVisible) {
                createfunction.style.marginLeft = '0';
                isPanelVisible = true;
            } else {
                createfunction.style.marginLeft = '-500px'; // Adjust this value based on your design
                isPanelVisible = false;
            }
        });
    } else {
        console.error("Button or notification panel element not found.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let postabsolute = document.querySelector('#postabosolote');
    let createfunction_1 = document.getElementById('createfunction-1');
    createfunction_1.addEventListener('click', function() {
        if (postabsolute) {
            postabsolute.style.display = 'block'; 
            postabsolute.style.display = 'flex'; 
        } else {
            console.log('postabsolute is undefined or null');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let btnCreate = document.getElementById('btnCreate');
    let postabsolute = document.querySelector('#postabosolote');

    // Ensure the postabosolote element is hidden by default
    if (postabsolute) {
        postabsolute.style.display = 'none';
    }

    if (btnCreate && postabsolute) {
        btnCreate.addEventListener('click', function() {
            if (postabsolute.style.display === 'none' || postabsolute.style.display === '') {
                postabsolute.style.display = 'flex'; // Show the element
            } else {
                postabsolute.style.display = 'none'; // Hide the element
            }
        });
    } else {
        console.error('btnCreate or postabosolote element not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let postabosolote_cancle = document.getElementById('postabosolote-cancle');
    let postabsolute = document.querySelector('#postabosolote');
    if (postabosolote_cancle && postabsolute) {
        postabosolote_cancle.addEventListener('click', function() {
            postabsolute.style.display = 'none'; // Hide postabsolute
        });
    } else {
        console.error('postabosolote_cancle or postabsolute is null or undefined.');
    }
});
{
    document.addEventListener('DOMContentLoaded', function() {
        let postabosolote_cancle = document.getElementById('postabosolote-cancle');
        let postabsolute = document.querySelector('#postabosolote');
        if (postabosolote_cancle && postabsolute) {
            postabosolote_cancle.addEventListener('click', function() {
                postabsolute.style.display = 'none'; // Hide postabsolute
            });
        } else {
            console.error('postabosolote_cancle:', postabosolote_cancle);
            console.error('postabsolute:', postabsolute);
            console.error('postabosolote_cancle or postabsolute is null or undefined.');
        }
    });
}
{
    const imageInput = document.getElementById('imageInput');
    imageInput.addEventListener('change', function() {
        let createpostprevbox = document.querySelector('.createpostprevbox');
        createpostprevbox.style.display = 'block';
        const selectedFile = this.files[0]; // Get the selected file
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            const fileType = selectedFile.type.split('/')[0]; // Get the file type (image or video)

            // Check if there is an existing preview element
            const existingPreview = document.getElementById('previewMedia');
            if (existingPreview) {
                existingPreview.remove(); // Remove the existing preview element
            }

            // Create a new preview element based on the file type
            let newPreview;
            if (fileType === 'image') {
                newPreview = document.createElement('img'); // Dynamic <img> tag created here
            } else if (fileType === 'video') {
                newPreview = document.createElement('video');
                newPreview.loop = true; // Play on loop
                newPreview.muted = true; // Mute the video
                newPreview.autoplay = true; // Autoplay the video
            }

            if (newPreview) {
                newPreview.id = 'previewMedia';
                newPreview.src = fileUrl;
                newPreview.alt = selectedFile.name;
                newPreview.style.width = '100%';
                newPreview.style.height = '100%';
                newPreview.style.objectFit = 'cover';

                // Append the new preview element to the container
                document.querySelector("#previewboxincreatebox").appendChild(newPreview);
            }
        } else {
            console.log('No file selected');
        }
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        const shareImageInput = document.getElementById('imageInput');
        shareImageInput.addEventListener('change', function() {
            const createSharePreviewBox = document.querySelector('#sharepreviewimg');
            createSharePreviewBox.style.display = 'block';
            const selectedFile = this.files[0]; // Get the selected file
            if (selectedFile) {
                const fileUrl = URL.createObjectURL(selectedFile);
                const fileType = selectedFile.type.split('/')[0]; // Get the file type (image or video)

                // Check if there is an existing preview element
                const existingPreview = document.getElementById('sharePreviewMediaElement');
                if (existingPreview) {
                    existingPreview.remove(); // Remove the existing preview element
                }

                // Create a new preview element based on the file type
                let newPreview;
                if (fileType === 'image') {
                    newPreview = document.createElement('img');
                } else if (fileType === 'video') {
                    newPreview = document.createElement('video');
                    newPreview.loop = true; // Play on loop
                    newPreview.muted = true; // Mute the video
                    newPreview.autoplay = true; // Autoplay the video
                }

                if (newPreview) {
                    newPreview.id = 'sharePreviewMediaElement';
                    newPreview.src = fileUrl;
                    newPreview.alt = selectedFile.name;
                    newPreview.style.width = '100%';
                    newPreview.style.height = '100%';
                    newPreview.style.objectFit = 'cover';

                    // Append the new preview element to the container
                    createSharePreviewBox.appendChild(newPreview);
                }
            } else {
                console.log('No file selected');
            }
        });
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        let upper_lowerbtn = document.getElementById('upper-lowerbtn');
        let chevron_down = document.getElementById('chevron-down');
        let angle_up = document.getElementById('angle-up');
        let boldtext = document.querySelector('#accAccessibilitysectionbox h6');
        let hiddenpanelboxforacc = document.querySelector('#hiddenpanelboxforacc');
        let uppertoggerflag = false;
        upper_lowerbtn.addEventListener('click', function() {
            if (uppertoggerflag) {
                chevron_down.style.display = 'none';
                angle_up.style.display = 'block';
                boldtext.style.fontWeight = 300;
                uppertoggerflag = false;
                hiddenpanelboxforacc.style.top = '0';
                hiddenpanelboxforacc.style.zIndex = '-2';
            } else {
                chevron_down.style.display = 'block';
                angle_up.style.display = 'none';
                boldtext.style.fontWeight = 'bold';
                uppertoggerflag = true;
                hiddenpanelboxforacc.style.top = '100%';
                hiddenpanelboxforacc.style.zIndex = '0';
            }
        });
    });
}
{
    document.addEventListener('DOMContentLoaded', function() {
        let nexttickarrorshare = document.getElementById('nexttickarrorshare');
        let postsharddone = document.querySelector('.postsharddone');
        let createpostshare = document.querySelector('.createpostshare')
        nexttickarrorshare.addEventListener('click', function() {
            postsharddone.style.display = 'block'; 
            createpostshare.style.display = 'none'
            console.log("Button clicked");
        });
    });
}
{
    let backtickarrorpost = document.getElementById('backtickarrorpost');
    let createpostprevbox = document.querySelector('.createpostprevbox');
    let createpostbox = document.querySelector('#postabosolote');
    backtickarrorpost.addEventListener('click',function(){
        createpostprevbox.style.display = 'none';
        createpostbox.style.display = 'none';
    })
}
{
    document.addEventListener('DOMContentLoaded', () => {
        const textarea = document.getElementById('capctiontextarea');
        const charCountSpan = document.getElementById('char-count');
        const maxCharacters = 2000; 
        function updateCharCount() {
            const text = textarea.value;
            const charCount = text.length;
            charCountSpan.textContent = charCount + '/' + maxCharacters;
            if (charCount > maxCharacters) {
                textarea.value = text.slice(0, maxCharacters); 
            }
        }
        textarea.addEventListener('input', updateCharCount);
    });
}
{
    let nexttickarrorpost = document.getElementById('nexttickarrorpost');
    let createpostshare = document.querySelector('.createpostshare');
    let previewboxincreatebox = document.getElementById('previewboxincreatebox');
    let createpostprevbox = document.querySelector('.createpostprevbox')
    nexttickarrorpost.addEventListener('click',function(){
        createpostshare.style.display = 'block';
        previewboxincreatebox.style.display = 'none';
        createpostprevbox.style.display = 'none';
    })
}
{
    let backtickarrorshare = document.getElementById('backtickarrorshare');
    let createpostshare = document.querySelector('.createpostshare');
    let previewboxincreatebox = document.getElementById('previewboxincreatebox');
    let createpostprevbox = document.querySelector('.createpostprevbox')
    backtickarrorshare.addEventListener('click',function(){
        createpostshare.style.display = 'none';
        previewboxincreatebox.style.display = 'block';
        createpostprevbox.style.display = 'block';
    })
}
{
    let live_Next_btn = document.getElementById('live_Next-btn');
    let notavlibaltt = document.querySelector('#notavlibaltt');
    live_Next_btn.addEventListener('click', function () {
        notavlibaltt.style.bottom = '0';
        setTimeout(function () {
            notavlibaltt.style.bottom = '-10%';
        }, 2000);
    });
}
var displayhide = 1;
function sidebarboxshow() {
    var sidebarBoxes = document.getElementsByClassName("moresidebarbox");
    for (var i = 0; i < sidebarBoxes.length; i++) {
        sidebarBoxes[i].style.display = "none";
        if (displayhide == 0) {
            sidebarBoxes[i].style.display = "block"; 
            sidebarBoxes[i].style.display = "flex"; 
            displayhide = 1
        } else {
            sidebarBoxes[i].style.display = "none";
            displayhide = 0
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const postDoneImageContainer = document.getElementById('postdone-image-container');
    if (postDoneImageContainer) {
        const postDoneImage = document.createElement('img');
        postDoneImage.src = '/Assets/postdone.gif';
        postDoneImage.alt = 'Post Done';
        postDoneImageContainer.appendChild(postDoneImage);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const shareImageInput = document.getElementById('imageInput');
    shareImageInput.addEventListener('change', function() {
        // Remove logic related to Post Done Preview
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('imageInput');
    const postsharddonemianbox = document.getElementById('postsharddonemianbox');

    imageInput.addEventListener('change', function () {
        const selectedFile = this.files[0]; // Get the selected file
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile); // Create a URL for the file
            const fileType = selectedFile.type.split('/')[0]; // Get the file type (image or video)

            // Set the background of the postsharddonemianbox
            if (fileType === 'image') {
                postsharddonemianbox.style.backgroundImage = `url(${fileUrl})`;
                postsharddonemianbox.style.backgroundSize = 'cover';
                postsharddonemianbox.style.backgroundPosition = 'center';
                console.log('Background image applied:', fileUrl);
            } else {
                console.log('Only image files are supported as background.');
            }
        } else {
            console.log('No file selected.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('imageInput');
    const postsharddonemianbox = document.getElementById('postsharddonemianbox');
    const nexttickarrorshare = document.getElementById('nexttickarrorshare');
    let uploadedFileUrl = null; // Store the uploaded file URL

    // Handle file input change
    imageInput.addEventListener('change', function () {
        const selectedFile = this.files[0]; // Get the selected file
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile); // Create a URL for the file
            const fileType = selectedFile.type.split('/')[0]; // Get the file type (image or video)

            // Store the file URL if it's an image
            if (fileType === 'image') {
                uploadedFileUrl = fileUrl;
                console.log('Image file selected:', uploadedFileUrl);
            } else {
                uploadedFileUrl = null;
                console.log('Video files are not supported as background.');
            }
        } else {
            console.log('No file selected');
        }
    });

    // Handle toggle on nexttickarrorshare
    nexttickarrorshare.addEventListener('click', function () {
        if (uploadedFileUrl) {
            postsharddonemianbox.style.backgroundImage = `url(${uploadedFileUrl})`;
            postsharddonemianbox.style.backgroundSize = 'cover';
            postsharddonemianbox.style.backgroundPosition = 'center';
            console.log('Background image applied:', uploadedFileUrl);
        } else {
            console.log('No valid image file uploaded.');
        }
    });
});

{
    document.addEventListener('DOMContentLoaded', function() {
        const shareImageInput = document.getElementById('imageInput');
        const createSharePreviewBox = document.querySelector('#finalpreviewimg');

        if (shareImageInput && createSharePreviewBox) { // Ensure elements exist
            shareImageInput.addEventListener('change', function() {
                createSharePreviewBox.style.display = 'block';
                const selectedFile = this.files[0]; // Get the selected file
                if (selectedFile) {
                    const fileUrl = URL.createObjectURL(selectedFile);
                    const fileType = selectedFile.type.split('/')[0]; // Get the file type (image or video)

                    // Check if there is an existing preview element
                    const existingPreview = document.getElementById('sharePreviewMediaElement');
                    if (existingPreview) {
                        existingPreview.remove(); // Remove the existing preview element
                    }

                    // Create a new preview element based on the file type
                    let newPreview;
                    if (fileType === 'image') {
                        newPreview = document.createElement('img');
                    } else if (fileType === 'video') {
                        newPreview = document.createElement('video');
                        newPreview.loop = true; // Play on loop
                        newPreview.muted = true; // Mute the video
                        newPreview.autoplay = true; // Autoplay the video
                    }

                    if (newPreview) {
                        newPreview.id = 'sharePreviewMediaElement';
                        newPreview.src = fileUrl;
                        newPreview.alt = selectedFile.name;
                        newPreview.style.width = '100%';
                        newPreview.style.height = '100%';
                        newPreview.style.objectFit = 'cover';

                        // Append the new preview element to the container
                        createSharePreviewBox.appendChild(newPreview);
                    }
                } else {
                    console.log('No file selected');
                }
            });
        } else {
            console.error('imageInput or finalpreviewimg element not found.');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('imageInput');
    const postsharddonemianbox = document.getElementById('postsharddonemianbox');
    const nexttickarrorshare = document.getElementById('nexttickarrorshare');
    let uploadedFileUrl = null; // Store the uploaded file URL
    let uploadedFileType = null; // Store the uploaded file type

    // Handle file input change
    imageInput.addEventListener('change', function () {
        const selectedFile = this.files[0]; // Get the selected file
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile); // Create a URL for the file
            const fileType = selectedFile.type.split('/')[0]; // Get the file type (image or video)

            // Store the file URL and type
            uploadedFileUrl = fileUrl;
            uploadedFileType = fileType;
            console.log('File selected:', uploadedFileUrl, 'Type:', uploadedFileType);
        } else {
            console.log('No file selected');
        }
    });

    // Handle toggle on nexttickarrorshare
    nexttickarrorshare.addEventListener('click', function () {
        if (uploadedFileUrl && uploadedFileType) {
            // Clear existing content
            postsharddonemianbox.innerHTML = '';

            if (uploadedFileType === 'image') {
                const imgElement = document.createElement('img');
                imgElement.src = uploadedFileUrl;
                imgElement.alt = 'Uploaded Image';
                imgElement.style.width = '100%';
                imgElement.style.height = '100%';
                imgElement.style.objectFit = 'cover';
                imgElement.style.borderRadius = '15px'; // Match container's border radius
                postsharddonemianbox.appendChild(imgElement);
                console.log('Image element created and appended:', uploadedFileUrl);
            } else if (uploadedFileType === 'video') {
                const videoElement = document.createElement('video');
                videoElement.src = uploadedFileUrl;
                videoElement.loop = true;
                videoElement.muted = true;
                videoElement.autoplay = true;
                videoElement.style.width = '100%';
                videoElement.style.height = '100%';
                videoElement.style.objectFit = 'cover';
                videoElement.style.borderRadius = '15px'; // Match container's border radius
                postsharddonemianbox.appendChild(videoElement);
                console.log('Video element created and appended:', uploadedFileUrl);
            }
        } else {
            console.log('No valid file uploaded.');
        }
    });
});
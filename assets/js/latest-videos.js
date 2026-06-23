fetch("data/latest-videos.json")

.then(response => response.json())

.then(videos => {

    const featured = document.getElementById("featured-video");

if (featured && videos.length > 0) {

    const firstVideo = videos[0];

    featured.innerHTML = `

    <div class="featured-video-card">

        <iframe
            src="https://www.youtube-nocookie.com/embed/${firstVideo.videoId}"
            title="${firstVideo.title}"
            allowfullscreen>
        </iframe>

    </div>

    `;
}

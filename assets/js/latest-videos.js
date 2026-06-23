fetch("data/latest-videos.json")

.then(response => response.json())

.then(videos => {

    const container =
        document.getElementById("latest-videos");

    videos.forEach(video => {

        container.innerHTML += `

        <a href="${video.url}"
           target="_blank"
           class="video-row">

            <div class="video-thumb">

                <img src="${video.thumbnail}"
                     alt="${video.title}">

            </div>

            <div class="video-info">

                <h3>${video.title}</h3>

                <p>
                    Neues Video auf Magisthans Spielekiste.
                </p>

            </div>

            <div class="video-arrow">
                →
            </div>

        </a>

        `;
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const stats = document.querySelector("#retro-stats");

    if (!stats) return;

    const bars = stats.querySelectorAll(".stat-fill");

    function resetBars() {

        bars.forEach(bar => {

            bar.style.transition = "none";
            bar.style.width = "0%";

        });

    }

    function animateBars() {

        resetBars();

        setTimeout(() => {

            bars.forEach(bar => {

                bar.style.transition = "width 1.8s ease";

                bar.style.width = bar.dataset.value + "%";

            });

        }, 60);

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateBars();

            } else {

                resetBars();

            }

        });

    }, {

        threshold: 0.15,
        root: null,
        rootMargin: "0px 0px -10% 0px"

    });

    observer.observe(stats);

});

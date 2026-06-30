document.addEventListener("DOMContentLoaded", () => {

    const stats = document.getElementById("retro-stats");

    const bars = stats.querySelectorAll(".stat-fill");

    function animateBars(){

        bars.forEach((bar,index)=>{

            const value = bar.dataset.value;

            bar.style.transition = "none";
            bar.style.width = "0";

            requestAnimationFrame(()=>{

                setTimeout(()=>{

                    bar.style.transition = "width 1s ease";
                    bar.style.width = value + "%";

                }, index * 180);

            });

        });

    }

    animateBars();

    stats.addEventListener("mouseenter", animateBars);

});
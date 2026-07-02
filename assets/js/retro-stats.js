document.addEventListener("DOMContentLoaded", () => {

    const stats = document.querySelector("#retro-stats");

    const bars = document.querySelectorAll(".stat-fill");

    function animateBars(){

        bars.forEach(bar=>{

            bar.style.transition="none";
            bar.style.width="0%";

        });

        requestAnimationFrame(()=>{

            bars.forEach(bar=>{

                const value=bar.dataset.value;

                bar.style.transition="width 1.8s ease";
                bar.style.width=value+"%";

            });

        });

    }

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateBars();

            }

        });

    },{
        threshold:0.55
    });

    observer.observe(stats);

});

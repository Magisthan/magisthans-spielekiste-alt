document.addEventListener("DOMContentLoaded", () => {

    const stats = document.getElementById("retro-stats");

    const bars = document.querySelectorAll("#retro-stats .stat-fill");

    function animateBars(){

        bars.forEach((bar,index)=>{

            bar.style.transition="none";
            bar.style.width="0";

            setTimeout(()=>{

                bar.style.transition="width 1.1s ease";
                bar.style.width=bar.style.getPropertyValue("--value");

            },80+(index*180));

        });

    }

    animateBars();

    stats.addEventListener("mouseenter",animateBars);

});
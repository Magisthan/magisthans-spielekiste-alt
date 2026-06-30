window.addEventListener("load", () => {

    const popup = document.getElementById("achievement-popup");

    setTimeout(() => {

        popup.classList.add("show");

    }, 800);

    setTimeout(() => {

        popup.classList.remove("show");
        popup.classList.add("hide");

    }, 5500);

});
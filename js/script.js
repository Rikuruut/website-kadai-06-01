function toggleMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById("nav");
    var navLinks = document.querySelectorAll("#nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
        });
    });
});

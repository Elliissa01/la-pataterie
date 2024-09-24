const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

//Affiche ou cache le menu burger au clic.
hamburger.addEventListener("click", () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    } else {
        navLinks.style.display = "none";
        menuOpen = false;
    }
})
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const btnElement = document.querySelector(".nav-cta-button");
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

//Animation du bouton Quiz.
btnElement.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnElement.offsetLeft);
    const y = (event.pageY - btnElement.offsetTop);

    btnElement.style.setProperty("--xPos", x + "px");
    btnElement.style.setProperty("--yPos", y + "px");
})
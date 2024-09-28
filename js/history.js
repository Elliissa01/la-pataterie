const counterElements = document.querySelectorAll('.counter');
const fasElements = document.querySelectorAll('.fas');

/*Incrémenter les compteurs*/
counterElements.forEach(counterEl => {
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        let current = +counterEl.innerText;
        const ceil = +counterEl.getAttribute('data-ceil');
        const increment = ceil / 160; //Prendre le chiffre le plus petit pour que le temps d'animation soit uniforme.
        current = Math.ceil(current + increment);

        //Mise à jour des compteurs.
        if(current < ceil) {
            counterEl.innerText = current;
            setTimeout(incrementCounter, 40);
        } else {
            counterEl.innerText = ceil;
        }
    }
});

/*Modifier la taille des icônes*/
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        fasElements.forEach(fasEl => {
        fasEl.classList.replace('fa-3x', 'fa-2x');
      });
    } else {
        fasElements.forEach(fasEl => {
        fasEl.classList.replace('fa-2x', 'fa-3x');
      });
    }
});

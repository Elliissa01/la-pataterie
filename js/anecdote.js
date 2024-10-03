//Cartes.
const cards = [
    {
        id: 1,
        image: "../img/slider-1.jpg",
        alt: "Patate douce",
        anecdote: `Une patate ... douce ! Ça existe aussi ! Sucrée, elle se mange sous forme de purée, de gratin et de frites mais, aussi, sous forme de desserts.`,
        title: "Patate douce",
    },
    {
        id: 2,
        image: "../img/slider-2.jpg",
        alt: "Pomme de terre violette",
        anecdote: `Il existe des pommes de terre violettes ! Eh oui ! Vitelotte, Bleue d'Artois ou Violine de Borée, ce sont toutes des variétés violettes et anciennes.`,
        title: "Couleur violette",
    },
    {
        id: 3,
        image: "../img/slider-3.jpg",
        alt: "Fleurs de pomme de terre",
        anecdote: `Marie-Antoinette, l'épouse du roi Louis XVI, aimait porter les fleurs blanches de pommes de terre dans ses cheveux.`,
        title: "Coiffure d'antan",
    },
    {
        id: 4,
        image: "../img/slider-4.jpg",
        alt: "Chips de pomme de terre",
        anecdote: `La chips de pomme de terre a été inventée par un cuisinier énervé contre un client, qui se plaignait de l'épaisseur des pommes de terre sautées.`,
        title: "Fines tranches",
    },
    {
        id: 5,
        image: "../img/slider-5.jpg",
        alt: "Vaisseau spatial",
        anecdote: `La pomme de terre est le premier légume cultivé avec succès dans l'espace. C'était lors d'un test de culture sans gravité à bord de la navette Columbia, en 1995.`,
        title: "Légume astronaute",
    },
];
const cardList = document.querySelector(".card-list");

//Au chargement de la page.
window.addEventListener("DOMContentLoaded", function() {

    //Affichage des cartes.
    displayCards(cards);

});

/*Permet l'affichage des cartes.*/
function displayCards(cards) {

    //Retourne un tableau contenant les cartes à afficher.
    let arrayCards = cards.map(function(item) {
        return `<div class="card-item swiper-slide">
                    <div class="card-container">
                        <div class="card-content">
                            <div class="card-image">
                                <img src="${item.image}" alt="${item.alt}">
                            </div>
                            <div class="card-text">
                                <p>${item.anecdote}</p>
                            </div>
                        </div>
                        <h4 class="card-title">${item.title}</h4>
                    </div>
                </div>`;
    });
    
    //Conversion en chaîne de caractères et insertion dans le DOM.
    arrayCards = arrayCards.join("");
    cardList.innerHTML = arrayCards;
}

/*Swiper | Card Slider*/
const swiper = new Swiper('.slider-wrapper', {
    //Paramètres optionnels.
    loop: true,
    grabCursor: true,
    
    //Pagination.
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    //Flèches de navigation.
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        //Écran >= 320px.
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        //Écran >= 750px.
        750: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        //Écran >= 1050px.
        1050: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        //Écran >= 1450px.
        1450: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
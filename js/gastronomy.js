//Repas.
const food = [
    {
        id: 1,
        photo: "../img/menu-1.jpg",
        title: "frites",
        category: "à côté",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "france",
    },
    {
        id: 2,
        photo: "../img/menu-2.jpg",
        title: "poutine",
        category: "plat",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "canada",
    },
    {
        id: 3,
        photo: "../img/menu-3.jpg",
        title: "hasselbackspotatis",
        category: "à côté",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "suède",
    },
    {
        id: 4,
        photo: "../img/menu-4.jpg",
        title: "gnocchis",
        category: "plat",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "italie",
    },
    {
        id: 5,
        photo: "../img/menu-5.jpg",
        title: "kartoffelsalat",
        category: "plat",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "allemagne",
    },
    {
        id: 6,
        photo: "../img/menu-6.jpg",
        title: "purée",
        category: "à côté",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "france",
    },
    {
        id: 7,
        photo: "../img/menu-7.jpg",
        title: "gratin dauphinois",
        category: "plat",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "france",
    },
    {
        id: 8,
        photo: "../img/menu-68.jpg",
        title: "gâteau di patate",
        category: "dessert",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "italie",
    },
];
const menu = document.querySelector(".menu");
const filterButtons = document.querySelectorAll(".btn-menu-filter");

//Affichage des repas au chargement de la page.
window.addEventListener("DOMContentLoaded", function() {
    displayFood(food);
});

//Filtre des repas.
filterButtons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.category;
        const foodCategory = food.filter(function(item) {
            return item;
        });
        console.log(foodCategory);
    })
});

/*Permet l'affichage des repas.*/
function displayFood(foodItem) {
    //Retourne un tableau contenant les repas à afficher.
    let displayMenu = foodItem.map(function(item) {
        return `<article class="menu-item">
                        <img src=${item.photo} class="item-photo" alt=${item.title}>
                        <div class="item-infos">
                            <header>
                                <h4>${item.title}</h4>
                            </header>
                            <p class="item-description">${item.description}</p>
                            <div class="item-nationality">
                                <i class="fa-solid fa-earth-americas"></i>
                                <p class="item-country">${item.country}</p>
                            </div> 
                        </div>
                    </article>`;
    });
    //Conversion en chaîne de caractères.
    displayMenu = displayMenu.join("");
    //Insertion dans le DOM.
    menu.innerHTML = displayMenu;
}
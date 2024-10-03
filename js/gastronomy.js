//Repas.
const food = [
    {
        id: 1,
        photo: "../img/menu-1.jpg",
        title: "Frites",
        category: "à côté",
        description: `La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale.`,
        country: "France",
    },
    {
        id: 2,
        photo: "../img/menu-2.jpg",
        title: "Poutine",
        category: "plat",
        description: `La poutine est un plat à base de frites agrémentées de fromage en grains et de sauce.`,
        country: "Canada",
    },
    {
        id: 3,
        photo: "../img/menu-3.jpg",
        title: "Hasselbackspotatis",
        category: "à côté",
        description: `Les hasselbackspotatis sont des pommes de terre coupées en fines tranches à mi-hauteur, puis garnies de beurre, de chapelure et d'amandes avant d'être cuites.`,
        country: "Suède",
    },
    {
        id: 4,
        photo: "../img/menu-4.jpg",
        title: "Gnocchis",
        category: "plat",
        description: `Le gnocchi est une pâte alimentaire préparée à l'aide de pommes de terre pochées à l'eau.`,
        country: "Italie",
    },
    {
        id: 5,
        photo: "../img/menu-5.jpg",
        title: "Kartoffelsalat",
        category: "à côté",
        description: `La salade de pommes de terre est faite à partir de pommes de terre bouillies. Selon les goûts, elle est agrémentée de légumes, de viande et de vigrainette.`,
        country: "Allemagne",
    },
    {
        id: 6,
        photo: "../img/menu-6.jpg",
        title: "Purée",
        category: "à côté",
        description: `La purée s'obtient en écrasant des pommes de terre bouillies auxquelles on rajoute du lait et du beurre.`,
        country: "France",
    },
    {
        id: 7,
        photo: "../img/menu-7.jpg",
        title: "Tartiflette",
        category: "plat",
        description: `La tartiflette est une recette à base de gratin de pommes de terre, d'oignons, de lardons et de crème fraîche, le tout gratiné au reblochon (fromage de Savoie).`,
        country: "France",
    },
    {
        id: 8,
        photo: "../img/menu-8.jpg",
        title: "Gattò di patate",
        category: "plat",
        description: `Ce gâteau salé est constitué d'un mélange de pommes de terre en purée, de salami et de fromage.`,
        country: "Italie",
    },
];
const menu = document.querySelector(".menu");
const btnMenuContainer = document.querySelector(".btn-menu-container");

//Au chargement de la page.
window.addEventListener("DOMContentLoaded", function() {
    
    //Affichage des repas.
    displayFood(food);
    
    //Extraction d'une liste de catégories uniques.
    const categories = food.reduce(
        function(values, item) {
            if(!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["tout"]
    );

    //Affichage des boutons de filtre.
    displayButtons(categories);

});

/*Permet l'affichage des repas.*/
function displayFood(foodItem) {
    
    //Retourne un tableau contenant les repas à afficher.
    let displayMenu = foodItem.map(
        function(item) {
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
        }
    );
    
    //Conversion en chaîne de caractères et insertion dans le DOM.
    displayMenu = displayMenu.join("");
    menu.innerHTML = displayMenu;

}

/*Permet l'affichage des boutons de filtre.*/
function displayButtons(categories) {
    
    //Retourne un tableau contenant les boutons à afficher.
    let categoriesButtons = categories.map(
        function(category) {
            return `<button class="btn-menu-filter" type="button" data-category="${category}">${category}</button>`;
        }
    );
    
    //Conversion en chaîne de caractères et insertion dans le DOM.
    categoriesButtons = categoriesButtons.join("");
    btnMenuContainer.innerHTML = categoriesButtons;

    //Ajout du filtrage.
    const filterButtons = document.querySelectorAll(".btn-menu-filter");
    filterCategory(filterButtons);

}

/*Permet de filtrer les repas en fonction des catégories.*/
function filterCategory(filterButtons) {

    filterButtons.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.category;
            const foodCategory = food.filter(function(item) {
                if(item.category === category) {
                    return item;
                }
            });
            if(category === "tout") {
                displayFood(food);
            } else {
                displayFood(foodCategory);
            }
        });
    });

}
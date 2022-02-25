'use strict'
/*====================================================*/

export default class Scroll {
    // ajout du scroll qui permet de ramener l'utilisateur vers le contenu
    scrollBtn () { // initier la fonction scroll pour que le bouton apparaisse quand l'utilisateur scroll jusqu'à une certaine hauteur de son ecran et sinon il disparait "display block" et "display none"
        window.addEventListener ("scroll", () => {
            let button = document.getElementById('photographersLink');
            let y = window.scrollY;
            if (y >= 130) {
                button.style.display = "block"; // apparait une fois arriver a une hauteur vertical "Y"
            } else {
                button.style.display="none"; // sinon disparait
            }
        });
    }

}
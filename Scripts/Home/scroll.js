'use strict'
/*====================================================*/

export default class Scroll {
    // ajout du scroll qui permet de ramener l'utilisateur vers le contenu
    scrollBtn () {
        window.addEventListener ("scroll", () => {
            let button = document.getElementById('photographersLink');
            let y = window.scrollY;
            if (y >= 130) {
                button.style.display = "block";
            } else {
                button.style.display="none";
            }
        });
    }

}
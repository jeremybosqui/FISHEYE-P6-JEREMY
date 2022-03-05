'use strict'
/*==================*/

export default class Scroll {
    // Renvoyer l'utilsateur en haut de la page vers la section des photographe lorsqu'il scroll jusqu'a un certain niveau le bouton apparait / disparait quand il remonte au dessus de ce meme niveau où il apparait
    scrollButton() {
        window.addEventListener("scroll", () => {
            let button = document.getElementById("main-photographers-link");
            let y = window.scrollY;

            if (y >= 130) {
                button.style.display = "block"; // afficher
            } else {
                button.style.display = "none"; // ne pas afficher
            }
        });
    }
}

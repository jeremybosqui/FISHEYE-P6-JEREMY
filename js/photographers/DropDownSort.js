'use strict'
/*========================*/

import GalleryFactory from '../Factory/GalleryFactory.js';


export default class DropDownMenu {
    // evenemtn au clikc pour afficher / fermer le dropdown menu
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) { // afficher le menu
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) { // fermer le menu
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }

    // initialiser les differentes sortes de facon de trier : DATE / POPULARITE / TITRE
    // j'utilise la méthode sort() qui me permet de faire un tri des valeurs en les convertissant en chaine de caracteres et j'y ajoute une fonction de comparaison qui decrit comment les elements seront compares et l'ordre dans lequel ils seront affichés
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort')); // array.from() me permet de convertir ma NodeList en tableau

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => { // je creer un gestionnaire d'event click à chaque btn
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // tri par POPULARITE
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // tri par DATE
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { // tri par TITRE
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }

    displaySortMedia(mediaArraySort) {
        // display photographers works
        document.getElementById("ph-works").innerHTML = "";
        new GalleryFactory().builder(mediaArraySort);
    }
}
'use strict'
/*========================*/

import GalleryFactory from '../Factory/GalleryFactory.js';


export default class DropDownMenu {
    // evenement au click pour afficher / fermer le dropdown menu
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) { // afficher le contenu du menu
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "block";
            });
            this.sortMedias(data);
        }
        if (arrowClose) { // fermer le contenu du menu
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
        // accessibilite clavier echape permet de fermet le contenu du menu
        if (arrowClose) {
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' || e.key === 'Echape' || e.key === 'Esc') {
                    hiddenSort[0].style.display = "none";
                }
            })
        }
    }

    // initialiser les differentes sortes de facon de trier : DATE / POPULARITE / TITRE
    // j'utilise la méthode sort() qui me permet de faire un tri des valeurs en les convertissant en chaine de caracteres et j'y ajoute une fonction de comparaison qui decrit comment les elements seront compares et l'ordre dans lequel ils seront affichés
    sortMedias(data) {
        let mediaArraySort = []; // initier tableau vide
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort')); // array.from() me permet de convertir ma NodeList en tableau
        // accessibilite clavier validation du filtre via la touche entrer
        sortBtn.forEach((btn, index) => btn.addEventListener('keydown', (e) => { // je creer un gestionnaire d'event click à chaque btn
            if (e.key == 'Enter' || e.key == 'Entr' || e.key == 'Entrer') {
                hiddenSort[0].style.display = "none";
                if (index == 0) {
                    btnSort.innerHTML = `Popularité`;

                    mediaArraySort = media.sort((a, b) => { // tri par POPULARITE
                        return b.likes - a.likes // tri par nombre de likes decroissant , plus il a de likes plus il doit etre placé en avant du coup le tri est fait du plus grand au plus petit
                    })

                } else if (index == 1) {
                    btnSort.innerHTML = `Date`;

                    mediaArraySort = media.sort((a, b) => { // tri par DATE
                        return new Date(a.date).valueOf() - new Date(b.date).valueOf(); // tri par date si la date est tres recente alors elle sera mise en premier et inversement
                    })

                } else if (index == 2) {
                    btnSort.innerHTML = `Titre`;

                    mediaArraySort = media.sort((a, b) => { // tri par TITRE
                        // comparer les noms des photos et ranger dans l'ordre alphabetique
                        if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                            return -1;
                        } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                            return 1;
                        }
                    })
                }
                this.displaySortMedia(mediaArraySort);
            }
        }));
        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => { // je creer un gestionnaire d'event click à chaque btn
                hiddenSort[0].style.display = "none";
                if (index == 0) {
                    btnSort.innerHTML = `Popularité`;

                    mediaArraySort = media.sort((a, b) => { // tri par POPULARITE
                        return b.likes - a.likes // tri par nombre de likes decroissant , plus il a de likes plus il doit etre placé en avant du coup le tri est fait du plus grand au plus petit
                    })

                } else if (index == 1) {
                    btnSort.innerHTML = `Date`;

                    mediaArraySort = media.sort((a, b) => { // tri par DATE
                        return new Date(a.date).valueOf() - new Date(b.date).valueOf(); // tri par date si la date est tres recente alors elle sera mise en premier et inversement
                    })

                } else if (index == 2) {
                    btnSort.innerHTML = `Titre`;

                    mediaArraySort = media.sort((a, b) => { // tri par TITRE
                        // comparer les noms des photos et ranger dans l'ordre alphabetique
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
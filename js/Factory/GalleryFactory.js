'use strict'
/*=============*/
import MediaFactory from './MediaFactory.js';
import Lightbox from '../photographers/LightBox.js';

export default class GalleryFactory {
    constructor() {
        this.totalLike = 0; // initier le totlalike à 0 pour comptabiliser l'ajout et la suppression quand on click et reclick dessus
    }

    // creer la gallerie contenant les differentes images et videos ainsi que la lightbox
    builder(dataMedia) {
        const id = window.location.search.split('id=')[1]; // correspond à la position de l'id dans le tableau json
        let mediaFactory = new MediaFactory();
        let currentMedia = []; // initier un tableau vide
        let currentMediaName = []; // initier un tableau vide

        dataMedia.forEach(element => {
            if (id == element.photographerId) { // creer la condition pour que l'ID soit bien egal à celui des photographers dans le ficher data.json
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);
                let workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.photoName}</h2>
                    <span class="ph-work-price">${element.price} €</span>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" tabindex="0" data-value="${element.likes}"></i>
                    </div>
                </div>
                `
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork); // creer l'article avec la methode appendchild qui ajoute l'element enfant à la dernier position de l'element parent
                articlePhWork.classList.add("ph-work-elt");
                this.totalLike += parseInt(element.likes); // utilisation de parseInt qui va convertir la chaine de caractere en un nombre entier qui correspond au nombre de like de l'image
                currentMedia.push(mediaHTML.outerHTML); // push les donner initier dans le tableau creer ci-dessus currentMedia
                currentMediaName.push(element.photoName); // push les donner initier dans le tableau currentMediaName
                (new Lightbox())
                .init(currentMedia, currentMediaName)
            }
        })
        return this; // fait reference à la method sur laquelle il est appele a savoir GalleryFactory.builder
    }
}
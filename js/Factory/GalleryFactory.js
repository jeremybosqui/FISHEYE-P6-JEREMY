'use strict'
/*=============*/
import MediaFactory from './MediaFactory.js';
import Lightbox from '../photographers/LightBox.js';

export default class GalleryFactory {
    constructor() {
        this.totalLike = 0;
    }

    // creer la gallerie contenant les differentes images et videos ainsi que la lightbox
    builder(dataMedia) {
        const id = window.location.search.split('id=')[1]; //
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
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>
                `
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                articlePhWork.classList.add("ph-work-elt");
                this.totalLike += parseInt(element.likes);
                currentMedia.push(mediaHTML.outerHTML);
                currentMediaName.push(element.photoName);
                (new Lightbox())
                .init(currentMedia, currentMediaName)
            }
        })
        return this;
    }
}
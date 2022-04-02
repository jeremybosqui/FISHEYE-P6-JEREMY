'use strict'
/*=======================*/

export default class LightBox {
    constructor() {
        this.currentIndex = 0;
    }

    // initialiser la lightbox + initialiser les functions et appel de celles-ci pour naviguer dans la lightbox
    init(currentMedia, currentMediaName) {
        let getMedias = Array.from(document.getElementsByClassName('ph-media'));
        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];
            this.currentIndex = index;
            let lightBox = document.getElementById('works-lightbox');
            lightBox.style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))
        // fonctionne partiellement
        /*
        let lightBox = document.getElementById('works-lightbox');
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                lightBox.style.display = 'block';
            }
        })*/
        this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName);
        this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName);
        this.close();
        this.keyboard(currentMedia, currentMediaName);
        return this
    }

    //  initier pour passer au media precedent au click sur la gauche
    previous(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex < 0) {
                this.currentIndex = media.length - 1;
                this.currentIndex = name.length - 1;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

    // initier pour que le media passe au suivant au click vers la droite
    next(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex += 1;
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex > name.length - 1) {
                this.currentIndex = 0;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }
    // fermeture de la lightbox au click sur la croix
    close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            let lightbox = document.getElementById('works-lightbox');
            lightbox.style.display = 'none';
        })
    }
    // initialiser le coté accessible de la lightbox avec la navigation via les touches du clavier
    keyboard(currentMedia, currentMediaName) {
        // non fonctionnel
        /*let Openlight = document.getElementById('works-lightbox');
        Openlight.addEventListener('keydown', (b) => {
            if(b.key === 'Enter') {
                Openlight.style.display = 'block';
            }
        })*/
        document.addEventListener('keydown', (key) => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            // ouverture de la lightbox
            /*if (key.code === "Enter" || key.code === "Entrer" || key.code === "Entr") {
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'block';
            }*/
            // si l'utilisateur appuis sur echap ferme la modal
            if (key.code === "Escape" || key.code === "Esc"|| key.code === "Echape") {
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'none';
            }

            // si il appuis sur la fleche droite du clavier l'image est la suivante
            else if (key.code === "ArrowRight") {
                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {
                    this.currentIndex = 0;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }

            // si il appuis sur la fleche gauche du clavier l'image est la precedente
            else if (key.code === "ArrowLeft") {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
        });
    }
}

'use strict'
/* ======================= */

export default class LightBox {
  constructor () {
    this.currentIndex = 0
  }

  // initialiser la lightbox + initialiser les functions et appel de celles-ci pour naviguer dans la lightbox
 

  //  initier pour passer au media precedent au click sur la gauche
  previous (elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex -= 1
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      if (this.currentIndex < 0) {
        this.currentIndex = media.length - 1
        this.currentIndex = name.length - 1
      }

      const src = media[this.currentIndex]
      const nameSrc = name[this.currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    })
  }

  // initier pour que le media passe au suivant au click vers la droite
  next (elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex += 1
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      if (this.currentIndex > name.length - 1) {
        this.currentIndex = 0
      }

      const src = media[this.currentIndex]
      const nameSrc = name[this.currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    })
  }

  // fermeture de la lightbox au click sur la croix
  close () {
    document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
      const lightbox = document.getElementById('works-lightbox')
      lightbox.style.display = 'none'
    })
  }

  // initialiser le coté accessible de la lightbox avec la navigation via les touches du clavier
  keyboard (currentMedia, currentMediaName) {
    document.addEventListener('keydown', (key) => {
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')
      // ouverture de la lightbox
      /* if (key.code === "Enter" || key.code === "Entrer" || key.code === "Entr") {
                const lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'block';
            } */
      // si l'utilisateur appuis sur echap ferme la modal
      if (key.code === 'Escape' || key.code === 'Esc' || key.code === 'Echape') {
        const lightBox = document.getElementById('works-lightbox')
        lightBox.style.display = 'none'
      } // eslint-disable-line

      // si il appuis sur la fleche droite du clavier l'image est la suivante
      else if (key.code === 'ArrowRight') {
        this.currentIndex += 1

        if (this.currentIndex > currentMediaName.length - 1) {
          this.currentIndex = 0
        }

        const src = currentMedia[this.currentIndex]
        const nameSrc = currentMediaName[this.currentIndex]

        lightBoxMedia.innerHTML = `${src}`
        lightBoxName.innerHTML = `${nameSrc}`
      } // eslint-disable-line

      // si il appuis sur la fleche gauche du clavier l'image est la precedente
      else if (key.code === 'ArrowLeft') {
        this.currentIndex -= 1

        if (this.currentIndex < 0) {
          this.currentIndex = currentMedia.length - 1
          this.currentIndex = currentMediaName.length - 1
        }

        const src = currentMedia[this.currentIndex]
        const nameSrc = currentMediaName[this.currentIndex]

        lightBoxMedia.innerHTML = `${src}`
        lightBoxName.innerHTML = `${nameSrc}`
      }
    })
  }
}

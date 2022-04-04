'use strict'
/* ============== */
/* eslint eqeqeq: "off" */
import Modal from './Modal.js'
import Form from './Form.js'

export default class PhotographerProfil {
  // verifier sur quelle page se trouve l'utilisateur, si la position (location) correspond à photographer's "id", creer photographer's 'Profile' section
  displayPhotographerProfil (data) {
    const photographersData = data.photographers
    const id = window.location.search.split('id=')[1] // methode split qui me permet de diviser une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau
    const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id) // La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback
    const sectionPhotographerProfil = document.getElementById('ph-profil-header')
    const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags.map(tag => `<a class="ph-tags" href="index.html">#${tag}</a>`).join(' ')}</p>
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `

    sectionPhotographerProfil.innerHTML = templatePhotographerProfil
    new Modal().modal(photographersData)
    new Form().fields()
  }
}

'use strict'
/* =================== */
import Filter from './FilterTags.js'
import Scroll from './Scroll.js'

// display tous les photographes par defaut
export default class HomePageBuilder {
  // initier la photographer section creation des elements, appel des fonctions 'filtertags' et 'passer au contenu'
  displayPhotographers (data) {
    const photographers = data.photographers
    photographers.map(photographe => { // eslint-disable-line 
      const sectionPhotographers = document.getElementById('photographers')
      const articlePhotographers = document.createElement('article')
      articlePhotographers.className = photographe.tags.join(' ') + ' articlePh' // join permet de concatener tous les elements et les renvoie
      const templatePhotographer = `
            <a href="photographer.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map(tag =>
    `<li class="li" data-filter="${tag}">#${tag}</li>`).join(' ')}</ul>` // utilisation de map et de join identique à précédemment

      sectionPhotographers.appendChild(articlePhotographers)
      articlePhotographers.innerHTML = templatePhotographer
    })
    new Filter().filterTags()
    new Scroll().scrollButton()
  }
}

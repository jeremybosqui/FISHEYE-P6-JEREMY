'use strict'
/* =================== */
import Scroll from './Scroll.js'

// display tous les photographes par defaut
export default class HomePageBuilder {
  // initier la photographer section creation des elements, appel  fonction 'passer au contenu'
  displayPhotographers (data) {
    const photographers = data.photographers
    photographers.map(photographe => { // eslint-disable-line 
      const sectionPhotographers = document.getElementById('photographers')
      const articlePhotographers = document.createElement('article')
      articlePhotographers.className = ' articlePh'
      const templatePhotographer = `
            <a href="photographer.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            ` // utilisation de map identique à précédemment

      sectionPhotographers.appendChild(articlePhotographers)
      articlePhotographers.innerHTML = templatePhotographer
    })
    new Filter()
    new Scroll().scrollButton()
  }
}

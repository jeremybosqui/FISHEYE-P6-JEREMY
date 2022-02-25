'use strict'
/*====================================================*/


// utilisation d'export default pour n'exporter qu'un seul objet ou variable qui est le builder de la page d'accueil
export default class HomePageBuild {
        // mise en place du builder de la section photographer plus appel de la fonction "filtertag" et egalement celui du bouton "passer au contenu" sur la page d'accueil
    buildPhotographers (data) {
        let photographers = data.photographers;
        photographers.map(photographe => {
            let sectionPhotographers = document.getElementById('photographers');
            let articlePhotographers = document.createElement('article');
            articlePhotographers.className = photographe.tags.join('') + 'articlePh';
            let templatePhotographer = `
            <a href ="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt"${photographe.alt}">
                <h2 class"name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagLine">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter">${photographe.tags.map (tag => `<li data-filter="${tag}">#${tag}</li>`).join('')}
            </ul>`

            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.innerHTML = templatePhotographer;
        })


    }
}
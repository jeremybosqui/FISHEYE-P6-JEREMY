'use strict'
/* =================== */
/* eslint eqeqeq: "off" */
// fonction filter tags
export default class Filter {
  // initialiser la fonction
  filterTags () {
    const filtres = document.querySelector('#ul')
    const articles = document.querySelectorAll('.articlePh')

    // ajouter l'eventlistener lors du click
    filtres.addEventListener('click', event => {
      const classValue = event.target.classList.value

      if (classValue.indexOf('actived') === -1) {
        event.target.classList.add('actived')
      } else {
        event.target.classList.remove('actived')
      }

      this.sortDomArticle(articles)
    })
  }

  // recupere le filters avec la classe 'actived'  et les placer dans le tableau 'filterSelected'
  getActiveFilters () {
    const currentFilters = document.querySelectorAll('#ul .li.actived')
    const filterSelected = [] // initier un tableau vide afin de stocker filters

    currentFilters.forEach(function (currentFilter) {
      filterSelected.push(currentFilter.getAttribute('data-filter')) // push data-filter afin de le stocker dans le tableau filterselected
    })

    return filterSelected // faire un return
  }

  // comparer / check si 'filters' a la meme valeur que la class 'article'
  ownAllFilters (article) {
    const filters = this.getActiveFilters()
    const classValue = article.classList.value
    const classes = classValue.split(' ')// methode split qui me permet de diviser une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau
    const intersection = filters.filter( // la methode filter me permet de créer un nouveau tableau avec tous les éléments qui réussissent le test implémenté par ma fonction
      x => classes.includes(x)
    )

    return filters.length == intersection.length // la condition qui me permet d'utiliser la methode filtre afin de verifier que les elements correspondent
  }

  // Afficher ou cacher les articles
  sortDomArticle (articles) {
    articles.forEach((article) => {
      if (this.ownAllFilters(article)) {
        article.style.display = 'block'// affiche
      } else {
        article.style.display = 'none'// n'affiche pas
      }
    })
  }
}

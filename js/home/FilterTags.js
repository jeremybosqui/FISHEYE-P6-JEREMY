'use strict'
/*===================*/

// fonction filter tags
export default class Filter {
    // initialiser la fonction
    filterTags() {
        let filtres = document.querySelector('#ul');
        let articles = document.querySelectorAll('.articlePh');

        // ajouter l'eventlistener lors du click
        filtres.addEventListener('click', event => {
            let classValue = event.target.classList.value;

            if (-1 === classValue.indexOf('actived')) {
                event.target.classList.add('actived')
            } else {
                event.target.classList.remove('actived')
            }

            this.sortDomArticle(articles);
        });
    }

    // recupere le filters avec la classe 'actived'  et les placer dans le tableau 'filterSelected'
    getActiveFilters() {
        let currentFilters = document.querySelectorAll('#ul .li.actived');
        let filterSelected = []; // initier un tableau vide afin de stocker filters

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter")); // push data-filter afin de le stocker dans le tableau filterselected
        });

        return filterSelected; // faire un return
    }

    // comparer / check si 'filters' a la meme valeur que la class 'article'
    ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');// methode split qui me permet de diviser une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau
        let intersection = filters.filter( // la methode filter me permet de créer un nouveau tableau avec tous les éléments qui réussissent le test implémenté par ma fonction
            x => classes.includes(x)
        );

        return filters.length == intersection.length; // la condition qui me permet d'utiliser la methode filtre afin de verifier que les elements correspondent
    }

    // Afficher ou cacher les articles
    sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'block';// affiche
            } else {
                article.style.display = 'none';// n'affiche pas
            }
        });
    }
}
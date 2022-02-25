'use strict'

/*================================================*/
/*======  mise en place de la partie filtre avec les tags present dans la nav =============*/
export default class Filter {

    filterTags () {
        let filtres = document.querySelector('ul');
        let articles = document.querySelectorAll('.articlePh');

        // initialiser l'event listener on click
        filtres.addEventListener('click', event => {
            let classValue = event.target.classList.value;
            // active ou desactive la classe active
            if (-1 === classValue.indexOf('actived')) {
                event.target.classList.add('actived')
            } else {
                event.target.classList.remove('actived')
            }

            this.sortDomArticle(articles);
        })
    }

    // retravailler les filtres avec la classe active et creer "filterselected"

    getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
        });

        return filterSelected;
    }

    // comparer / verifier si "filters" a la meme valeur que la classe "article"

    ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    // afficher ou masquer les articles avec la fonction suivante

    sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

}
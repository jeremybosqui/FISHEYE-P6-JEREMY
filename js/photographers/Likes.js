'use strict'
/*================*/

export default class LikeSubscriber {
    // ajouter ou retirer un 'like' quand on click sur le 'like' icon
    constructor() {
        let media = document.getElementById('ph-works');
        // accessibilite via le clavier
        media.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                let classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ');// La propriété undefined indique qu'une variable n'a pas reçu de valeur
                // operateur ternaire si classList n'est pas defiinie alors ... sinon value split
                // la metode split divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau
                let hasClassBtn = -1 != classListTarget.indexOf('heart-btn');

                if (hasClassBtn) {
                    let totalLikes = parseInt(document.getElementById('total-likes').innerHTML); // utilisation de la methode parseInt qui converti une chaine de caractere en nombre entier cela va permettre de retourner le nombre de like
                    let counterLike = e.target.parentNode.firstElementChild.firstElementChild; // permet de cibler l'elemnt enfant du parent counterLike
                    let likeValue = parseInt(counterLike.innerHTML);
                    let isLiked = -1 != classListTarget.indexOf('isLiked');

                    document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes; //
                    counterLike.innerHTML = isLiked ? --likeValue : ++likeValue; // operateur ternaire si isLiked alors likeValue decremente sinon incremente likeValue

                    if (isLiked) {
                        e.target.classList.remove('isLiked'); // retire isLiked si il est déjà like
                        e.target.classList.replace('fas', 'far');
                    } else {
                        e.target.classList.add('isLiked'); // sinon ajouter isLiked si il n'est pas like
                        e.target.classList.replace('far', 'fas');
                    }
                }
            }
        })
        media.addEventListener('click', (b) =>{
            let classListTarget = typeof b.target.classList === 'undefined' ? [] : b.target.classList.value.split(' ');// La propriété undefined indique qu'une variable n'a pas reçu de valeur
                // operateur ternaire si classList n'est pas defiinie alors ... sinon value split
                // la metode split divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau
                let hasClassBtn = -1 != classListTarget.indexOf('heart-btn');

                if (hasClassBtn) {
                    let totalLikes = parseInt(document.getElementById('total-likes').innerHTML); // utilisation de la methode parseInt qui converti une chaine de caractere en nombre entier cela va permettre de retourner le nombre de like
                    let counterLike = b.target.parentNode.firstElementChild.firstElementChild; // permet de cibler l'elemnt enfant du parent counterLike
                    let likeValue = parseInt(counterLike.innerHTML);
                    let isLiked = -1 != classListTarget.indexOf('isLiked');

                    document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes; //
                    counterLike.innerHTML = isLiked ? --likeValue : ++likeValue; // operateur ternaire si isLiked alors likeValue decremente sinon incremente likeValue

                    if (isLiked) {
                        b.target.classList.remove('isLiked'); // retire isLiked si il est déjà like
                        b.target.classList.replace('fas', 'far');
                    } else {
                        b.target.classList.add('isLiked'); // sinon ajouter isLiked si il n'est pas like
                        b.target.classList.replace('far', 'fas');
                    }
                }
        })
    }
}

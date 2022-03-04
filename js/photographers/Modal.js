'use strict'
/*======================*/



export default class Modal {
    // Evenement launch/close la modal au click sur le 'contact me' bouton
    modal(data) {
        const modalBtn = document.getElementById("ph-contact");
        const closeBtn = document.getElementsByClassName('close-form-icon');

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
            this.formPhName(data);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }

    // lancer la modal
    launchModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'block';
    }

    // fermer la modal
    closeModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'none';
    }

    // afficher le nom des differents photographe en recuperant le dada id , l'afficher dans le titre de la modal
    formPhName(data) {
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? data : data.filter(photographer => photographer.id == id);
        const phName = document.getElementById('ph-form-name');
        const phNameTemplate = `${photographers[0].name}`
        phName.innerHTML = phNameTemplate;
    }
}

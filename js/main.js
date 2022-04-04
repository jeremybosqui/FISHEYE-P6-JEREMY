'use strict'
/* =============== */
// data json import
import ApiFishEye from './provider/ApiFishEye.js'
// homepage folder home
import HomePageBuilder from './home/HomePageBuilder.js'
// photographer pages folder photographers
import PhotographerProfil from './photographers/PhotographerProfil.js'
import DropDownMenu from './photographers/DropDownSort.js'
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch () {
  new ApiFishEye().getDataFishEye().then((data) => {
    if (window.location.pathname.includes('/photographer.html')) {
      // photographer profil header
      new PhotographerProfil().displayPhotographerProfil(data)

      // dropdown menu
      new DropDownMenu().dropDown(data)

      // photographer gallery et la box price/likes
      new MediaBuilder().photographersMedias(data)
      return
    }
    // homepage builder contenant le scroll et le filtre en import
    new HomePageBuilder().displayPhotographers(data)
  }).catch(() => {
    console.error('Impossible de charger le fichier ApiFishEye') // catch si il y a une erreur et si c'est le cas affiche le message suivant
  })
})()

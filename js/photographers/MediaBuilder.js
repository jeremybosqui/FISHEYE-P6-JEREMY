'use strict'
/* ============== */
/* eslint-disable */
import GalleryFactory from '../Factory/GalleryFactory.js'
import LikeSubscriber from './Likes.js'

export default class MediaBuilder {
  // appel de GalleryFactory pour creer la section media  avec 'Like' function et la box likes and price
  photographersMedias (data) {
    const media = data.media
    const gallery = new GalleryFactory().builder(media)
    this.boxLikesAndPrice(gallery.totalLike, data.photographers)
    new LikeSubscriber()
  }

  // mise en place de la box contenant le nombre total likes et le photographer's price
  boxLikesAndPrice (totalLike, photographers) {
    const id = window.location.search.split('id=')[1]

    photographers.forEach(element => {
      if (id == element.id) {
        const box = document.getElementById('box')
        const boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `
        box.innerHTML = boxTemplate
      }
    })
  }
}

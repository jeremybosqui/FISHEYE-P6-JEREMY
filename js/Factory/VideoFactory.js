'use strict'
/* ================ */

export default class VideoFactory {
  // creation des elements pour les videos : SRC / CONTROLS / BUTTON ROLE / CLASSNAME
  createHTML (element) {
    const eltVideo = document.createElement('video')
    eltVideo.setAttribute('src', element.video)
    eltVideo.setAttribute('role', 'button')
    eltVideo.className = 'ph-media'

    return eltVideo
  }
}

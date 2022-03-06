'use strict'
/*==============*/
import ImageFactory from './ImageFactory.js';
import VideoFactory from './VideoFactory.js';


export default class MediaFactory {
    // verifier si une image ou si une video est selectioné avec la propriété hasOwnProperty
    renderMedia(element) {
        let factory = null;
        if (element.hasOwnProperty('image')) {
            factory = new ImageFactory();
        } else if (element.hasOwnProperty('video')) {
            factory = new VideoFactory();
        }
        return factory.createHTML(element);
    }
}

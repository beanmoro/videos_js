import { Multimedia } from "./multimedia.module.js";
import { Video } from "./video.module.js";

export class Player extends Multimedia {

    constructor(url, id){
        super(url);
        this._id = id;
    }


    playMultimedia(){
        Video.setVideo(this.url, document.querySelector(this._id));
    }

    setStart(seconds){
        console.log(' 1 AAAAAAAAAAAAAAHHH '+seconds);
        const iframe = document.querySelector(this._id);
        console.log('2 AAAAAAAAAAAAAAHHH');
        iframe.setAttribute('src', `${this.url}?start=${seconds}`);
        console.log(' 3 AAAAAAAAAAAAAAH!!');
    }

}
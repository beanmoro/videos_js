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
        Video.setVideo(`${this.url}?start=${seconds}`, document.querySelector(this._id));
    }

}
export class Multimedia {
    #url;
    constructor(url) {
        this.#url = url;
    }

    get url(){
        return this.#url;
    }
    
    
    setStart = (start) => {
        return 'Este metodo es para realizar un cambio en la  URL del video';
    };
};
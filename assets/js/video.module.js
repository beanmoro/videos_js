export const Video = (() => {

    const setVideoUrlByElement = (url, element)=>{
        element.setAttribute('src', url);
    }

    const setVideo = (url, element) =>{
        setVideoUrlByElement(url, element);
    }

    return {
        setVideo
    };
})();


import { Player } from "./player.module.js";


document.addEventListener('DOMContentLoaded', () => {

    const musicPlayer = new Player('https://www.youtube.com/embed/qGyPuey-1Jw','#musica');
    const moviePlayer = new Player('https://www.youtube.com/embed/rhng15NnWFI','#peliculas');
    const seriesPlayer = new Player('https://www.youtube.com/embed/lDqlasyMJog','#series');

    musicPlayer.playMultimedia();
    moviePlayer.playMultimedia();
    seriesPlayer.playMultimedia();
    
    moviePlayer.setStart(57);
});





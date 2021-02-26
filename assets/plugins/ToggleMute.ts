import MediaPlayer from '../MediaPlayer';
import VideoPlugin from './VideoPlugin'

class ToggleMute implements VideoPlugin{

    private button : HTMLElement;

    constructor(ButtonToggle){
        this.button = ButtonToggle;
    }



    run(player : MediaPlayer){
        
        this.button.onclick = () => {


            player.toggleMute()

        }

    }
}

export default ToggleMute;
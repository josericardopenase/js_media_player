import MediaPlayer from '../MediaPlayer';
import VideoPlugin from './VideoPlugin'

class AutoPlay implements VideoPlugin{

    run(player : MediaPlayer){
        player.mute()
        player.play()
    }
}

export default AutoPlay;
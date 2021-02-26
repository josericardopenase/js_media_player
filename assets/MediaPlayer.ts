import VideoPlugin from "./plugins/VideoPlugin";

interface config{
    el : HTMLMediaElement,
    plugins : Array<VideoPlugin>,
}


class MediaPlayer{

    private media : HTMLMediaElement;
    private plugins : Array<VideoPlugin>;

    constructor(config : config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }

    private _initPlugins(){

        this.plugins.forEach(plugin => {
            plugin.run(this)
        })

    }

    public play() : void {
        this.media.play();
    }

    public pause() : void {
        this.media.pause();
    }

    public mute() : void {
        this.media.muted = true;
    }

    public isMuted() : boolean {
        return this.media.muted;
    }

    public toggleMute() : void {
        this.media.muted = !this.media.muted;
    }

    public unMute() : void{
        this.media.muted = false;
    }

    public togglePlay() : void{

        if(this.media.paused){
            this.media.play();
            return;
        }

        this.media.pause();

    }
}

export default MediaPlayer
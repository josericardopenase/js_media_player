import MediaPlayer from "../MediaPlayer";

export default interface VideoPlugin{
    run : (MediaPlayer) => void;
}
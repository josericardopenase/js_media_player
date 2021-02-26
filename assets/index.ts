import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import ToggleMute from './plugins/ToggleMute'


const video : HTMLVideoElement = document.querySelector("video")
const button : HTMLElement = document.querySelector("button")
const mute : HTMLElement = document.querySelector("#mute")

const player : MediaPlayer = new MediaPlayer({el : video, plugins: [
    new AutoPlay(),
    new ToggleMute(mute),
    new AutoPause()
]});

console.log(player)

button.onclick = () => player.togglePlay();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
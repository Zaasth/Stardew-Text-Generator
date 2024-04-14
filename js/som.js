import { AudioClick } from "./configs.js";
export function SonsClicks(){
    const MuteMusic = document.querySelector("#mute_music");
    const AtiveMusic = document.querySelector("#ative_music");
    const Music = document.querySelector("#music");
    const SoundSumary = document.querySelectorAll(".pick").length;
    const AudioClick3 = new Audio("/sounds/pickUpItem.wav");

    for (let index = 0; index < SoundSumary; index++) {
        document.querySelectorAll(".pick")[index].addEventListener("click", function(){
                AudioClick3.play();
        });
    }

    Music.volume = 0.06;
    MuteMusic.addEventListener("click", function(){
        Music.pause();
        AudioClick.play();
    })
    AtiveMusic.addEventListener("click", function(){
        Music.play();
        AudioClick.play();
    })
}
import { SonsClicks } from "./som.js";
import { ConfigsJs } from "./configs.js";
import { AlterarImg } from "./AlterarImg.js";
import { AudioClick } from "./configs.js";

const btn = document.querySelector("#butão");
const input = document.querySelector("#textin");
const MainText = document.querySelector("#main_text");

/* Inicio Music */
SonsClicks();
/* Fim Music */
/* Inicio Configs */
ConfigsJs();
/* Fim Configs */
AlterarImg();
InputText();

function InputText(){
    
    btn.addEventListener("click", function(){
        
        let InputLength = input.value.length;
        
            if(InputLength < 30){
                MainText.innerHTML = `${input.value}`;
            } else if(InputLength > 30 && InputLength < 60){
                MainText.innerHTML = `${input.value.slice(0, 30)}<br> ${input.value.slice(31, InputLength)}`;
            } else if(InputLength > 60 && InputLength < 90) {
                MainText.innerHTML = `${input.value.slice(0, 30)}<br> ${input.value.slice(31, 60)} <br> ${input.value.slice(61, InputLength)}`;
            } else if(InputLength > 90 && InputLength < 120) {
                MainText.innerHTML = `${input.value.slice(0, 30)}<br> ${input.value.slice(31, 60)} <br> ${input.value.slice(61, 90)} <br> ${input.value.slice(91, InputLength)}`;
            } else if(InputLength > 121) {
                MainText.innerHTML = `O seu texto passou a quantidade de <br> caracteres permitidas`;
            }

        AudioClick.play();
    });
}

/*
 else if(InputLength > 90 && InputLength < 120) {
            MainText.innerHTML = `${input.value.slice(0, 31)}<br> ${input.value.slice(31, 60)} <br> ${input.value.slice(61, 90)} <br> ${input.value.slice(61, InputLength)}`;
        } else if(InputLength > 120 && InputLength <= 121) {
            MainText.innerHTML = `${input.value.slice(0, 31)}<br> ${input.value.slice(31, 60)} <br> ${input.value.slice(61, 90)} <br> ${input.value.slice(61, 90)} <br> ${input.value.slice(91, InputLength)}`;
        } else if(InputLength > 121) {
            MainText.innerHTML = `O seu texto passou o número de caracteres <br> permitidas`;
        }
        
function InputText(){
    btn.addEventListener("click", function(){
        MainText.innerHTML = `${input.value}`
        AudioClick.play();
    });
}
*/
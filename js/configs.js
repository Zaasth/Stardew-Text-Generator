
export const AudioClick = new Audio("/sounds/bigDeSelect.wav");
export const AudioClick2 = new Audio("/sounds/bigSelect.wav");
export function ConfigsJs(){
    const Section1 = document.querySelector(".main_section");
    const Configurações = document.querySelector(".main_section2");
    const config = document.querySelector("#config");
    const CloseConfig = document.querySelector("#close");
    
    config.addEventListener("click", function(){
        Configurações.classList.add("active");
        Section1.classList.add("sumir");
        Section1.classList.add("Hauto")
        AudioClick.play();
    });

    CloseConfig.addEventListener("click", function(){
        Configurações.classList.remove("active");
        Section1.classList.remove("sumir");
        AudioClick2.play();
    });
}
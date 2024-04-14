import { AudioClick } from "./configs.js";
import { AudioClick2 } from "./configs.js";

export function AlterarImg(){
    const modal = document.querySelector("#modal");
    const CloseModal = document.querySelector("#close_modal");
    const NpcImg = document.querySelector("#npc_img");
    const Npctext = document.querySelector("#npc_text");
    const HappyImgSize = document.querySelectorAll(".happy").length;
    const DefaultImgSize = document.querySelectorAll(".default").length;
    const AngryImgSize = document.querySelectorAll(".angry").length;
    const FearImgSize = document.querySelectorAll(".fear").length;
    const characters = document.querySelector("#char");
    const Main2 = document.querySelector("#main2");
    const Main = document.querySelector("#main_principal");
    const btnsearch = document.querySelector("#btn_search");
    let NameImg = "";
    let Npcs = ["Abigail", "Alex", "Caroline", "Clint", "Demetrius", "Elliott", "Emily", "Evelyn", "George", "Gus", "Haley", "Harvey", "Jas", "Jodi", "Kent", "Leah", "Lewis", "Linus", "Marnie", "Maru", "Pam", "Penny", "Pierre", "Robin", "Sam", "Sebastian", "Shane", "Vincent", "Willy", "Wizard"];
    const input = document.querySelector("#inputtext");
    
    input.addEventListener("click", function(){
        Main.classList.remove("main_section3")
        Main.classList.add("main_section2_auto");
        setTimeout(() => {
            for (let index = 0; index < document.querySelectorAll(`.npc`).length; index++) {
                document.querySelectorAll(`.npc`)[index].classList.remove("sumir");  
                document.querySelectorAll(`.happy`)[index].classList.remove("sumir");  
                document.querySelectorAll(`.default`)[index].classList.remove("sumir"); 
                document.querySelectorAll(`.angry`)[index].classList.remove("sumir");   
                document.querySelectorAll(`.fear`)[index].classList.remove("sumir"); 
        }
        }, 0);
            
    });
    btnsearch.addEventListener("click", function(e){
        Main.classList.remove("main_section2_auto");
        Main.classList.add("main_section3")
        const FiltrarNpcName = function(e){
            let confirm = e == input.value.slice(0, 1).toUpperCase()+input.value.slice(1, input.value.length).toLowerCase();
            return confirm;
        }
        Filtro()

        function Filtro(){
            let Filtrar = Npcs.filter(FiltrarNpcName)
            const MsgErro = document.querySelector("#msg_error");
            
            for (let i = 0; i < Npcs.length; i++) {
                if(Filtrar == Npcs[i]){
                    MsgErro.innerHTML = ""
                    for (let index = 0; index < document.querySelectorAll(`.npc`).length; index++) {
                        document.querySelectorAll(`.npc`)[index].classList.add("sumir");
                        document.querySelectorAll(`.happy`)[index].classList.add("sumir"); 
                        document.querySelectorAll(`.default`)[index].classList.add("sumir"); 
                        document.querySelectorAll(`.angry`)[index].classList.add("sumir");   
                        document.querySelectorAll(`.fear`)[index].classList.add("sumir");   
                    }
                    document.querySelectorAll(`.npc`)[i].classList.remove("sumir");  
                    document.querySelectorAll(`.happy`)[i].classList.remove("sumir");  
                    document.querySelectorAll(`.default`)[i].classList.remove("sumir"); 
                    document.querySelectorAll(`.angry`)[i].classList.remove("sumir");   
                    document.querySelectorAll(`.fear`)[i].classList.remove("sumir"); 
                }
            }
            if(Filtrar == false){
                Main.classList.remove("main_section3")
                Main.classList.add("main_section2_auto");
                const MsgErro = document.querySelector("#msg_error");
                MsgErro.innerHTML = "<strong> Character not found. </strong>"
               
            }
        } 
    });
   
    /*
    const detailschar = document.querySelector("#personagens");
        for (let i = 0; i < Npcs.length; i++) {
            const details = document.createElement("details");
            details.innerHTML = `
              <summary class="pick" id="npc"><img src="/img/characters/${Npcs[i]}/default.png" alt=""></summary>
              <p style="margin-top: 1%;" class="default inline"><img src="/img/characters/${Npcs[i]}/default.png" alt=""></p>
              <p class="happy inline"><img src="/img/characters/${Npcs[i]}/happy.png" alt=""></p>
              <p class="angry inline"><img src="/img/characters/${Npcs[i]}/angry.png" alt=""></p>
              <p class="fear inline"><img src="/img/characters/${Npcs[i]}/fear.png" alt=""></p>
              <hr>
            `;
            detailschar.appendChild(details);
        }
        */   
    charclick();
    function charclick(){
        characters.addEventListener("click", function(e){
            Main2.classList.add("main_section2_auto");
            characters.addEventListener("click", function(e){
                charclick2();
            });
        });
    }
    function charclick2(){
            Main2.classList.remove("main_section2_auto");
            charclick();
    }
    
    /*
    function NpcObject(name, imgindex){
        let ImgNames = ["default", "happy", "angry", "fear"];
        this.name = name;
        this.imgindex = `/img/characters/${name}/${ImgNames[imgindex]}.png`;
    }
    */

    /* Npc Img Default */
    for(let i = 0; i < DefaultImgSize; i++){

        document.querySelectorAll(".default")[i].addEventListener("click", function(){
            NameImg = "default";
            SwitchImg(i, NameImg);
        });
    }
    /* Npc Img Happy */
    for(let i = 0; i < HappyImgSize; i++){
        document.querySelectorAll(".happy")[i].addEventListener("click", function(){
            NameImg = "happy";
            SwitchImg(i, NameImg);
        });
    }
    /* Npc Img Angry */
    for(let i = 0; i < AngryImgSize; i++){
        document.querySelectorAll(".angry")[i].addEventListener("click", function(){
            NameImg = "angry";
            SwitchImg(i, NameImg);
        });
    }
    /* Npc Img Fear */
    for(let i = 0; i < FearImgSize; i++){
        document.querySelectorAll(".fear")[i].addEventListener("click", function(){

            NameImg = "fear";
            SwitchImg(i, NameImg);
        });
    }

    function SwitchImg(i, NomeImg){
        for (let index = 0; index < Npcs.length; index++) {
            
            switch(i){
                case index:
                    NpcImg.setAttribute("src", `/img/characters/${Npcs[i]}/${NomeImg}.png`);
                    Npctext.innerHTML = `${Npcs[i]}`;
                    AudioClick.play();
                    GerarAlert();
                break;
            }
        }

        }
        
        function GerarAlert(){
            modal.showModal()
            modal.classList.add("modal1");
            CloseModal.addEventListener("click", function(){
                modal.close()
                AudioClick2.play();
               });
        }
}



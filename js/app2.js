/* Ids 
abigail: 0

*/
const input2 = document.querySelector("#textin2");
const butao2 = document.querySelector("#butao2");

butao2.addEventListener("click", function(e){

    MainText.innerHTML = `${input2.value}`;

});
    for(let i = 0; i < document.querySelectorAll(".default").length; i++ ){
        document.querySelectorAll(".default")[i].addEventListener("click", function(){
            switch(i){
                case 0:
                    console.log("clicou na abigail")
                    break;
                case 1:
                    console.log("clicou na Caroline")
                   
                    break;
            }
          
        });
    }



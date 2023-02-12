let meg = document.querySelector("#item");


function clicou(){
const teste = document.querySelector('#teste')
const ul = teste.querySelector('ul')
const newLi = document.createElement("li");
newLi.innerText = meg.value ;
    if(validacampo()){
        ul.appendChild(newLi);
        meg.value="";
    }
}


meg.addEventListener('keyup',(e)=>{
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')
    const newLi = document.createElement("li");
    newLi.innerText += meg.value ;
    if(e.key == 'Enter'){
        newLi.innerText = meg.value ;
        if(validacampo()){
            ul.appendChild(newLi);
            meg.value=""; 
        }
    }
    });

    function validacampo(){
        if(meg.value == ''){
            return false;
        }
        if(!isNaN(meg.value)){
            return false;
        }
        if(!(meg.value).match('[a-zA-Z0-9]')){
            return false;
        }
        return true;
    }
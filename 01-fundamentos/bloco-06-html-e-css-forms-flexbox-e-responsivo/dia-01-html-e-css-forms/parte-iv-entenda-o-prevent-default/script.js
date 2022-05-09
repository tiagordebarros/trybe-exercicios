// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//Previne o comportamento padrão do clique no link
function preventDefaultClick(event){
    event.preventDefault();
}
HREF_LINK.addEventListener("click", preventDefaultClick);

//Previne o comportamento padrão do clique no checkbox
function preventDefaultCheckbox(event){
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", preventDefaultCheckbox);

//Previne o comportamento padrão da entrada do teclado no campo de texto
function preventDefaultKeyPress(event){
    let caractere =  event.key;
    if (caractere !== "a") {
        event.preventDefault();
    }
}
INPUT_TEXT.addEventListener("keypress", preventDefaultKeyPress);
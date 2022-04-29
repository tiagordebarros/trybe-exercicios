const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
    //R.: Porque há uma classe chamada "tech" atrelada somente ao elemento correspondente a primeira caixa. Essa classe, através do css, trasforma o elemnto em -20px no eixo Y.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
secondLi.addEventListener("click", addClassSecond);
thirdLi.addEventListener("click", addClassThird);

function addClassSecond() {
secondLi.className = "tech";
}

function addClassThird() {
thirdLi.className = "tech";
}

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function toggleTechClass(event) {
    const techClass = document.querySelector(".tech");
    techClass.classList.remove("tech");
    event.target.classList.add("tech");
    input.value = "";
}

firstLi.addEventListener("click",toggleTechClass);
secondLi.addEventListener("click",toggleTechClass);
thirdLi.addEventListener("click",toggleTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("input", function changeText(event) {
    const techClass = document.querySelector(".tech");
    techClass.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
function dbclick(URL) {
    URL = "https://tiagordebarros.github.io";
    window.location.replace(URL);
    console.log("FUNCIONA!");
}
myWebpage.addEventListener("dblclick", dbclick);

// 4.1. Que tal redirecionar para seu portfólio?
    //Resolvido no exercício anterior.

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColor() {
    myWebpage.style.color = "red";
}

function returnColor() {
    myWebpage.style.color = "white";
}

myWebpage.addEventListener("mouseover", changeColor);
myWebpage.addEventListener("mouseleave", returnColor);

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
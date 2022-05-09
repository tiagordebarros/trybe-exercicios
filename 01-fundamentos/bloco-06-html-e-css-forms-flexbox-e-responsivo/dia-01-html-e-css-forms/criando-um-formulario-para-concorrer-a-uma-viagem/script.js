//Prevent default para interromper a execução padrão do botão submeter
const buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", (event) => event.preventDefault());
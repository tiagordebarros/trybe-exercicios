//Prevent default para interromper a execução padrão do botão submeter
// const buttonSubmit = document.getElementById("submit");
// buttonSubmit.addEventListener("click", (event) => event.preventDefault());

//Utiliza o prevent default e válida se todos os dados obrigatórios foram preenchidos retornando uma mensagem
const buttonSubmit = document.getElementById("submit");
const textArea = document.querySelector("#contestResponse");
const fullNameField = document.querySelector("#fullName");
const emailField = document.querySelector("#email");
const agreementField = document.querySelector("#trpeAgreement");

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (textArea.maxLength <= "500" && fullNameField.value !== "" && emailField.value !== "" && agreementField.checked === true) {
        alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
    } else {
        alert("Dados inválidos!");
    }
});

//Apaga todos os campos do formulário utilizando o método reset
const buttonClear = document.querySelector("#clear");
const tripForm = document.querySelector("#tripForm");

buttonClear.addEventListener("click", () => tripForm.reset());

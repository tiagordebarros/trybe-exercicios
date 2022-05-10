//Prevent default para interromper a execução padrão do botão submeter
// const buttonSubmit = document.getElementById("submit");
// buttonSubmit.addEventListener("click", (event) => event.preventDefault());

const buttonSubmit = document.getElementById("submit");
const textArea = document.querySelector("#contestResponse");
const fullNameField = document.querySelector("#fullName");
const emailField = document.querySelector("#email");
const agreementField = document.querySelector("#trpeAgreement");

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (textArea.maxLength <= "500" && fullNameField.value !== "" && emailField.value !== "" && agreementField.checked === true) {
        alert("Dados enviados com sucesso!");
    } else {
        alert("Dados inválidos!");
    }
});

//Ativa e desatica o dark mode
function changeBackgroundColor() {
    const body = document.querySelector("body");
    const backgroundColorIcon = document.getElementById("background-color");

    backgroundColorIcon.addEventListener("click", function (event) {
        body.classList.toggle("dark-mode");
    });
};
changeBackgroundColor();
//Ativa e desatica o dark mode
function changeBackgroundColor() {
    const body = document.querySelector("body");
    const backgroundColorIcon = document.getElementById("background-color");

    backgroundColorIcon.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
};
changeBackgroundColor();

//Altera a cor do texto
function changeTextColor() {
    const p = document.querySelectorAll("p");
    for (let index = 0; index < p.length; index += 1) {
        const textColorIcon = document.getElementById("text-color");

        textColorIcon.addEventListener("click", function () {
        p[index].classList.toggle("alternative-text-color");
        });
    }
};

changeTextColor();
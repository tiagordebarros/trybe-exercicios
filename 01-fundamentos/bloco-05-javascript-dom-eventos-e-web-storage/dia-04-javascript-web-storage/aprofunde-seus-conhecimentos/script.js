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

//Altera o tamanho da fonte
function changeFontSize() {

    let fontSizeOptIcon = document.querySelector("#font-size-opt");
    fontSizeOptIcon.addEventListener("change", function () {
        const p = document.querySelectorAll("p");
        for (let index = 0; index < p.length; index += 1) {
            if (fontSizeOptIcon.value === "12") {
                p[index].style.fontSize = "12px";
            } else if (fontSizeOptIcon.value === "14") {
                p[index].style.fontSize = "14px";
            } else if (fontSizeOptIcon.value === "16") {
                p[index].style.fontSize = "16px";
            } else if (fontSizeOptIcon.value === "18") {
                p[index].style.fontSize = "18px";
            } else if (fontSizeOptIcon.value === "20") {
                p[index].style.fontSize = "20px";
            } else if (fontSizeOptIcon.value === "24") {
                p[index].style.fontSize = "24px";
            } else if (fontSizeOptIcon.value === "26") {
                p[index].style.fontSize = "26px";
            }
        }
    });
};
changeFontSize();

//Altera o espaçamento entre as linhas
function changeLineHeight() {

    let lineHeightOptIcon = document.querySelector("#line-height-opt");
    lineHeightOptIcon.addEventListener("change", function () {
        const p = document.querySelectorAll("p");
        for (let index = 0; index < p.length; index += 1) {
            if (lineHeightOptIcon.value === "1") {
                p[index].style.lineHeight = "1em";
            } else if (lineHeightOptIcon.value === "2") {
                p[index].style.lineHeight = "2em";
            } else if (lineHeightOptIcon.value === "3") {
                p[index].style.lineHeight = "3em";
            } else if (lineHeightOptIcon.value === "4") {
                p[index].style.lineHeight = "4em";
            } else if (lineHeightOptIcon.value === "5") {
                p[index].style.lineHeight = "5em";
            }
        }
    });
};
changeLineHeight();
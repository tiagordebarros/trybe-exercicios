//Leitor de Conteúdo v.0.1.0
//Autor: Tiago Ribeiro de Barros

//Define globalmente o local do armazenamento das preferências do usuário
let storage = localStorage;

//Ativa e desatica o dark mode
function changeBackgroundColor() {
    const body = document.querySelector("body");
    const backgroundColorIcon = document.getElementById("background-color");

    backgroundColorIcon.addEventListener("click", function () {
        let darkMode = body.classList.toggle("dark-mode");
        storage.setItem("darkMode", JSON.stringify(darkMode));
    });
};
changeBackgroundColor();

//Altera a cor do texto
function changeTextColor() {
    const p = document.querySelectorAll("p");
    for (let index = 0; index < p.length; index += 1) {
        const textColorIcon = document.getElementById("text-color");

        textColorIcon.addEventListener("click", function () {
            let alternativeColor = p[index].classList.toggle("alternative-text-color");
            storage.setItem("textColor", JSON.stringify(alternativeColor));
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
                let selected12px = fontSizeOptIcon.value;
                let font12 = p[index].style.fontSize = "12px";
                storage.setItem("fontSize", JSON.stringify(font12));
                storage.setItem("sizeSelected", JSON.stringify(selected12px));
            } else if (fontSizeOptIcon.value === "14") {
                let selected14px = fontSizeOptIcon.value;
                let font14 = p[index].style.fontSize = "14px";
                storage.setItem("fontSize", JSON.stringify(font14));
                storage.setItem("sizeSelected", JSON.stringify(selected14px));
            } else if (fontSizeOptIcon.value === "16") {
                let selected16px = fontSizeOptIcon.value;
                let font16 = p[index].style.fontSize = "16px";
                storage.setItem("fontSize", JSON.stringify(font16));
                storage.setItem("sizeSelected", JSON.stringify(selected16px));
            } else if (fontSizeOptIcon.value === "18") {
                let selected18px = fontSizeOptIcon.value;
                let font18 = p[index].style.fontSize = "18px";
                storage.setItem("fontSize", JSON.stringify(font18));
                storage.setItem("sizeSelected", JSON.stringify(selected18px));
            } else if (fontSizeOptIcon.value === "20") {
                let selected20px = fontSizeOptIcon.value;
                let font20 = p[index].style.fontSize = "20px";
                storage.setItem("fontSize", JSON.stringify(font20));
                storage.setItem("sizeSelected", JSON.stringify(selected20px));
            } else if (fontSizeOptIcon.value === "24") {
                let selected24px = fontSizeOptIcon.value;
                let font24 = p[index].style.fontSize = "24px";
                storage.setItem("fontSize", JSON.stringify(font24));
                storage.setItem("sizeSelected", JSON.stringify(selected24px));
            } else if (fontSizeOptIcon.value === "26") {
                let selected26px = fontSizeOptIcon.value;
                let font26 = p[index].style.fontSize = "26px";
                storage.setItem("fontSize", JSON.stringify(font26));
                storage.setItem("sizeSelected", JSON.stringify(selected26px));
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
                let selected1em = lineHeightOptIcon.value;
                let lineHeight1em = p[index].style.lineHeight = "1em";
                storage.setItem("lineHeight", JSON.stringify(lineHeight1em));
                storage.setItem("heightSelected", JSON.stringify(selected1em));
            } else if (lineHeightOptIcon.value === "2") {
                let selected2em = lineHeightOptIcon.value;
                let lineHeight2em = p[index].style.lineHeight = "2em";
                storage.setItem("lineHeight", JSON.stringify(lineHeight2em));
                storage.setItem("heightSelected", JSON.stringify(selected2em));
            } else if (lineHeightOptIcon.value === "3") {
                let selected3em = lineHeightOptIcon.value;
                let lineHeight3em = p[index].style.lineHeight = "3em";
                storage.setItem("lineHeight", JSON.stringify(lineHeight3em));
                storage.setItem("heightSelected", JSON.stringify(selected3em));
            } else if (lineHeightOptIcon.value === "4") {
                let selected4em = lineHeightOptIcon.value;
                let lineHeight4em = p[index].style.lineHeight = "4em";
                storage.setItem("lineHeight", JSON.stringify(lineHeight4em));
                storage.setItem("heightSelected", JSON.stringify(selected4em));
            } else if (lineHeightOptIcon.value === "5") {
                let selected5em = lineHeightOptIcon.value;
                let lineHeight5em = p[index].style.lineHeight = "5em";
                storage.setItem("lineHeight", JSON.stringify(lineHeight5em));
                storage.setItem("heightSelected", JSON.stringify(selected5em));
            }
        }
    });
};
changeLineHeight();

//Altera a família do texto
function changeFontFamly() {

    let fontFamilyOptIcon = document.querySelector("#font-family-opt");
    fontFamilyOptIcon.addEventListener("change", function () {
        const p = document.querySelectorAll("p");
        for (let index = 0; index < p.length; index += 1) {
            if (fontFamilyOptIcon.value === "arial") {
                let selectedArial = fontFamilyOptIcon.value;
                let fontArial = p[index].style.fontFamily = "Arial";
                storage.setItem('fontFamily', JSON.stringify(fontArial));
                storage.setItem('fontSelected', JSON.stringify(selectedArial));
            } else if (fontFamilyOptIcon.value === "verdana") {
                let selectedVerdana = fontFamilyOptIcon.value;
                let fontVerdana = p[index].style.fontFamily = "Verdana";
                storage.setItem('fontFamily', JSON.stringify(fontVerdana));
                storage.setItem('fontSelected', JSON.stringify(selectedVerdana));
            } else if (fontFamilyOptIcon.value === "times-new-roman") {
                let selectedTimesNewRoman = fontFamilyOptIcon.value;
                let fontTimesNewRoman = p[index].style.fontFamily = "Times New Roman";
                storage.setItem('fontFamily', JSON.stringify(fontTimesNewRoman));
                storage.setItem('fontSelected', JSON.stringify(selectedTimesNewRoman));
            }
        }
    });
}
changeFontFamly();

function printText() {
    let header = document.querySelector("header");
    header.style.display = "none";
    window.print();
    header.style.display = "unset";
}
let printer = document.getElementById("print");
printer.addEventListener("click", printText);

//Chama as funções que armazenam as preferências do usuário salvas no local storage após o carregamento completo da página
window.onload = () => {
    // alert("Inicializou");
    darkModeLocalStorage();
    alternativeTextColorLocalStorage();
    fontSizeLocalStorage();
    lineHeightLocalStorage();
    fontFamilyLocalStorage();
}

//Busca a informação do darkmode ligado ou desligado no local storage
function darkModeLocalStorage() {
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));
    let body = document.querySelector("body");
    if (darkMode === true) {
        body.classList.toggle("dark-mode");
    }
}

//Busca a informação da cor alternativa do texto no local storage
function alternativeTextColorLocalStorage() {
    let textColor = JSON.parse(localStorage.getItem("textColor"));
    let p = document.querySelectorAll("p");

    for (let index = 0; index < p.length; index += 1) {
        if (textColor === true) {
            p[index].classList.toggle("alternative-text-color");
        }
    }
}

//Busca a informação do tamanho da fonte no local storage
function fontSizeLocalStorage() {
    let fontSizeOptIcon = document.querySelector("#font-size-opt");
    let sizeSelected = JSON.parse(localStorage.getItem("sizeSelected"));
    fontSizeOptIcon.value = sizeSelected;

    let fontSize = JSON.parse(localStorage.getItem("fontSize"));
    let p = document.querySelectorAll("p");

    for (let index = 0; index < p.length; index += 1) {
        p[index].style.fontSize = fontSize;
    }
}

//Busca a informação do espaçamento entre linhas no local storage
function lineHeightLocalStorage() {
    let lineHeightOptIcon = document.querySelector("#line-height-opt");
    let heightSelected = JSON.parse(localStorage.getItem("heightSelected"));
    lineHeightOptIcon.value = heightSelected;

    let lineHeight = JSON.parse(localStorage.getItem("lineHeight"));
    let p = document.querySelectorAll("p");

    for (let index = 0; index < p.length; index += 1) {
        p[index].style.lineHeight = lineHeight;
    }
}

//Busca a informação da famíla da fonte no local storage
function fontFamilyLocalStorage() {
    let fontFamilyOptIcon = document.querySelector("#font-family-opt");
    let fontSelected = JSON.parse(localStorage.getItem("fontSelected"));
    fontFamilyOptIcon.value = fontSelected;

    let font = JSON.parse(localStorage.getItem("fontFamily"));
    let p = document.querySelectorAll("p");

    for (let index = 0; index < p.length; index += 1) {
        p[index].style.fontFamily = font;
    }
}
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

//Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let ul = document.getElementById("days");

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayMouthListItem = document.createElement("li");
        dayMouthListItem.innerHTML = days;

        ul.appendChild(dayMouthListItem);

        if (days === 24 || days === 31) {
            dayMouthListItem.className = "day holiday";
        } else if (days === 4 || days === 11 || days === 18) {
            dayMouthListItem.className = "day friday";
        } else if (days === 25) {
            dayMouthListItem.className = "day holiday friday";
        } else {
            dayMouthListItem.className = "day";
        }
    };
};

createDaysOfTheMonth();

//Exercício 2

function btnHoliday(btnName) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const buttonHoliday = document.createElement("button");

    buttonHoliday.innerHTML = btnName;
    buttonHoliday.id = "btn-holiday";
    buttonsContainer.appendChild(buttonHoliday);
};

btnHoliday("Feriados");

//Exercício 3

function changeBackgroudColor() {
    const buttonHoliday = document.querySelector('#btn-holiday');
    const holiday = document.querySelectorAll('.holiday');
    const backgroundColor = 'rgb(238,238,238)';
    const initialColor = '#777';
    const setNewBackgroundColor = 'green';
    const setNewColor = "white";

    buttonHoliday.addEventListener('click', function () {
        for (let index = 0; index < holiday.length; index += 1) {
            if (holiday[index].style.backgroundColor === setNewBackgroundColor && holiday[index].style.color === setNewColor) {
                holiday[index].style.backgroundColor = backgroundColor;
                holiday[index].style.color = initialColor;
            } else {
                holiday[index].style.backgroundColor = setNewBackgroundColor;
                holiday[index].style.color = setNewColor;
            }
        }
    })
};

changeBackgroudColor();

//Exercício 4

function btnFriday(btnName) {
    const buttonsContainer = document.querySelector(".buttons-container");
    const buttonFriday = document.createElement("button");

    buttonFriday.innerHTML = btnName;
    buttonFriday.id = "btn-friday";
    buttonsContainer.appendChild(buttonFriday);
}

btnFriday("Sexta-feira");

//Exercício 5
const fridayArray = [4, 11, 18, 25];

function changeFridayText(numbersArray) {
    const buttonFriday = document.querySelector("#btn-friday");
    const fridayDays = document.querySelectorAll("li.day.friday");

    buttonFriday.addEventListener("click", function () {
        for (let index = 0; index < fridayDays.length; index += 1) {
            if (fridayDays[index].innerHTML !== "Sextou!") {
                fridayDays[index].innerHTML = "Sextou!";
            } else {
                fridayDays[index].innerHTML = numbersArray[index];
            }
        }
    });
};

changeFridayText(fridayArray);

//Exercício 6

function zoomCalendarNumbers() {
    const dezDays = document.querySelector('#days');

    dezDays.addEventListener("mouseover", function (event) {
        event.target.style.fontSize = "35px";
    });
};
zoomCalendarNumbers();

function originalSizeCalendarNumbers() {
    const dezDays = document.querySelector('#days');

    dezDays.addEventListener("mouseout", function (event) {
        event.target.style.fontSize = "20px";
    });
};
originalSizeCalendarNumbers();

//Exercício 7

function myTasks(task) {
    const myTasksContainer = document.querySelector(".my-tasks");
    const myTask = document.createElement("span");

    myTask.innerHTML = task;
    myTasksContainer.appendChild(myTask);

}
myTasks("Cozinhar");

//Exercício 8

function taskColor(color) {
    const myTasksContainer = document.querySelector(".my-tasks");
    const taskColorContainer = document.createElement("div");

    taskColorContainer.className = "task";
    taskColorContainer.style.backgroundColor = color;

    myTasksContainer.appendChild(taskColorContainer);
}
taskColor("green");

//Exercício 9

function taskSelected() {
    const taskColorContainer = document.querySelector("div.task");

    taskColorContainer.addEventListener("click", function () {
        if (taskColorContainer.className === "task") {
            taskColorContainer.className = "task selected";
        } else {
            taskColorContainer.className = "task";
        }
    });
};
taskSelected();

//Solução alternativa

// function taskSelected() {
//    const taskColorContainer = document.querySelector("div.task");

//     taskColorContainer.addEventListener("click", function (event) {
//         if (event.target.className === "task") {
//             event.target.className = "task selected";
//         } else {
//             event.target.className = "task";
//         }
//     });
// };
// taskSelected();

//Exercício 10

//Somente atribui a cor

function assignTaskColor() {
    const taskColorContainer = document.querySelector("div.task");
    const taskColor = taskColorContainer.style.backgroundColor;
    const dezDays = document.querySelector('#days');

    dezDays.addEventListener("click", function (event) {
        if (taskColorContainer.className === "task selected") {
            event.target.style.color = taskColor;
            event.target.style.fontWeight = "700";
        }
    });
};
assignTaskColor();

// function setDayColor() {
//     let selectedTask = document.getElementsByClassName('task selected');
//     let days = document.querySelector('#days');
//     let taskDiv = document.querySelector('.task');
//     let taskColor = taskDiv.style.backgroundColor;

//     days.addEventListener('click', function(event){
//       let eventTargetColor = event.target.style.color;
//       if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//         let color = selectedTask[0].style.backgroundColor;
//         event.target.style.color = color;
//       } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//         event.target.style.color = 'rgb(119,119,119)';
//       }
//     });
//   };

//   setDayColor();

//Exercício Bônus

function myAppointment() {
    const appointmentField = document.querySelector("#task-input");
    const addButton = document.getElementById("btn-add");
    const myAppointmentContainer = document.querySelector(".task-list");

    addButton.addEventListener("click", function () {
        if (appointmentField.value.length > 0) {
            const myAppointmentLists = document.createElement("li");
            myAppointmentLists.innerText = appointmentField.value;
            myAppointmentContainer.appendChild(myAppointmentLists);
            appointmentField.value = "";
        } else {
            alert("Você não digitou nenhum compromisso!");
        }
    });

    appointmentField.addEventListener("keyup", function (event) {
        if (event.key === "Enter" && appointmentField.value.length > 0) {
            const myAppointmentLists = document.createElement("li");
            myAppointmentLists.innerText = appointmentField.value;
            myAppointmentContainer.appendChild(myAppointmentLists);
            appointmentField.value = "";
        } else if (event.key === "Enter" && appointmentField.value.length === 0) {
            alert("Você não digitou nenhum compromisso!");
        }
    });
};
myAppointment();

const title = document.getElementsByTagName("h1");
title[0].style.backgroundColor = "green";

const emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = "purple";
}

const noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.backgroundColor = "black";
}

const emergencyTasksContainer = document.getElementsByClassName("emergency-tasks");
emergencyTasksContainer[0].style.backgroundColor = "pink";

const noEmergencyTasksContainer = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasksContainer[0].style.backgroundColor = "yellow";

const footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = "darkgreen";
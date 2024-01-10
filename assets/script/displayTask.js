//import { displayTimer } from "./remainingTime";
let tasks = [];

export function displayTask(displayTime) {

    let listcontainer = document.getElementById("list-container");
    //listcontainer.innerHTML = localStorage.getItem("data");
    
    if (localStorage.getItem("tasks")){
    const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
}

    tasks.forEach(element => {
        let listElem = document.createElement("li");
        let span = document.createElement("span");
        listElem.id = element.uniqueId;
        let listElemContent = document.createTextNode(element.name);
        let dueDate = new Date(element.dueDate);
        //console.log(dueDate);
        displayTime(dueDate, element.uniqueId);
        let spanContent = document.createTextNode("X");

        listElem.appendChild(listElemContent);
        span.appendChild(spanContent);
        listElem.appendChild(span);
        listcontainer.appendChild(listElem);
    });

}
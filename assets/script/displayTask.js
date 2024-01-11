//import { displayTimer } from "./remainingTime";
let tasks = [];

export function displayTask(createTaskBlock, displayTime) {

    let listcontainer = document.getElementById("list-container");
    //listcontainer.innerHTML = localStorage.getItem("data");
    
    if (localStorage.getItem("tasks")){
    const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
}

    tasks.forEach(element => {

        createTaskBlock(element, displayTime);

    });

}
import { AddTask } from "./script/addTask.js";
import { displayTimer } from "./script/remainingTime.js";
import { saveData } from "./script/saveData.js";
import { displayTask } from "./script/displayTask.js";

export let tasks = [];

function rearrangeArray(){
    if (localStorage.getItem("tasks")){
        const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
        tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
    }
}

rearrangeArray();

displayTask(displayTimer);
let inputBox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");
let btn = document.getElementById("btn");
btn.addEventListener('click', (event) => {
    AddTask(displayTimer);
});

//AddTask(displayTimer);

let taskId;
let i;

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "DIV"){
        console.log("div clicked");
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        taskId = e.target.parentElement.id;

        

        i = 0;
        while(tasks[i].uniqueId != taskId){
            i++;
        }
        tasks.splice(i, 1);
        
        tasks = JSON.stringify(tasks);
        localStorage.setItem("tasks", tasks);
        saveData();
        rearrangeArray();
    }
});

saveData();
//displayTask();
//localStorage.clear();
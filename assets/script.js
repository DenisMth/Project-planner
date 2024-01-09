//import { AddTask } from "./script/addTask.js";
import { displayTimer } from "./script/remainingTime.js";
import { saveData } from "./script/saveData.js";
import { displayTask } from "./script/displayTask.js";

let tasks = [];
if (localStorage.getItem("tasks")){
    const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
}

function AddTask() {
    let inputBox =document.getElementById("input-box");
    let listcontainer = document.getElementById("list-container");

    if(inputBox.value != ''){

        let task = {
            name:inputBox.value,
            uniqueId:"blabla",
            creationDate:new Date(),
            dueDate:new Date(new Date().setDate(new Date().getDate() + 14)),
            done:false,
        };

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));
    
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        li.id = ""
        let now = new Date();
        let future = new Date(now.setDate(now.getDate() + 14));
        displayTimer(future, li);
        let span = document.createElement('span');
        span.innerHTML = "X";
        li.appendChild(span); 
     }
    inputBox.value ='';
    saveData()
}

let inputBox =document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");
 let btn = document.getElementById("btn");
 btn.addEventListener('click', AddTask);


AddTask();

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if( e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

saveData();
displayTask();
//localStorage.clear();
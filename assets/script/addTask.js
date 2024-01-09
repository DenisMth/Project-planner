
import { saveData } from "./saveData.js";
import { displayTimer } from "./remainingTime.js";
import { tasks } from "../script.js";

function randomId(){
    return Date.now().toString(16) + Math.floor(Math.random() * 1000).toString(16)
}

export function AddTask() {
    let inputBox = document.getElementById("input-box");
    let listcontainer = document.getElementById("list-container");

    if(inputBox.value != ''){

        let myId = randomId();

        let task = {
            name:inputBox.value,
            uniqueId:myId,
            creationDate:new Date(),
            dueDate:new Date(new Date().setDate(new Date().getDate() + 14)),
            done:false,
        };

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));
    
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.id = myId;
        listcontainer.appendChild(li);
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

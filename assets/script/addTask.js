
import { saveData } from "./saveData.js";
//import { displayTimer } from "./remainingTime.js";
import { tasks } from "../script.js";

function randomId(){
    return Date.now().toString(16) + Math.floor(Math.random() * 1000).toString(16)
}

export function AddTask(displayTime) {
    let inputBox = document.getElementById("input-box");
    let inputDesc = document.getElementById("input-description");
    let taskStatus = document.getElementById("status");
    let listcontainer = document.getElementById("list-container");

    if(inputBox.value != ''){

        let myId = randomId();

        let task = {
            name:inputBox.value,
            description:inputDesc.value,
            status:taskStatus.value,
            uniqueId:myId,
            creationDate:new Date(),
            dueDate:new Date(new Date().setDate(new Date().getDate() + 14)),
            done:false,
        };

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));


    
        let div = document.createElement("div");

        let span = document.createElement('span');
        span.innerHTML = "X";
        div.appendChild(span);

        let title = document.createElement("h3");
        let titleContent = document.createTextNode(task.name);
        title.appendChild(titleContent);
        div.appendChild(title);

        let para = document.createElement('p');
        let paraContent = document.createTextNode(task.description);
        para.appendChild(paraContent);
        div.appendChild(para);

        div.id = myId;

        if(task.status == "To do"){
            let todo = document.getElementById("todo");
            todo.appendChild(div);
        } else if(task.status == "Doing"){
            let doing = document.getElementById("doing");
            doing.appendChild(div);
        } else {
            let done = document.getElementById("done");
            done.appendChild(div);
        }

        let future = new Date(task.dueDate); 
        displayTime(future, myId);
     }
    inputBox.value ="";
    inputDesc.value ="";
    taskStatus.value="To do";
    saveData()
}

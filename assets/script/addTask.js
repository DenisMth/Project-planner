
import { saveData } from "./saveData.js";
//import { displayTimer } from "./remainingTime.js";
import { tasks } from "../script.js";

function randomId(){
    return Date.now().toString(16) + Math.floor(Math.random() * 1000).toString(16)
}

export function createTaskBlock(taskElement, displayTime){
        
    let div = document.createElement("div");

    let span = document.createElement('span');
    span.innerHTML = "X";
    div.appendChild(span); 

    let title = document.createElement("h3");
    let titleContent = document.createTextNode(taskElement.name);
    title.appendChild(titleContent);
    div.appendChild(title);

    /*
    let selector = document.createElement("select");
    selector.id = "statusTask";
    let option1 = document.createElement("option");
    let option1Content = document.createTextNode("To do");
    option1.appendChild(option1Content);
    let option2 = document.createElement("option");
    let option2Content = document.createTextNode("Doing");
    option2.appendChild(option2Content);
    let option3 = document.createElement("option");
    let option3Content = document.createTextNode("Done");
    option3.appendChild(option3Content);
    selector.appendChild(option1);
    selector.appendChild(option2);
    selector.appendChild(option3);
    selector.addEventListener("change", (event) =>{
        let statusTask = document.getElementById("statusTask");
        taskElement.status = statusTask.value;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    

    title.appendChild(selector);
    */

    let para = document.createElement('p');
    let paraContent = document.createTextNode(taskElement.description);
    para.appendChild(paraContent);
    div.appendChild(para);

    div.id = taskElement.uniqueId;
    
    if(taskElement.status == "To do"){
        let todo = document.getElementById("todo");
        todo.appendChild(div);
    } else if(taskElement.status == "Doing"){
        let doing = document.getElementById("doing");
        doing.appendChild(div);
    } else {
        let done = document.getElementById("done");
        done.appendChild(div);
    }

    let future = new Date(taskElement.dueDate);
    displayTime(future, taskElement.uniqueId);
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

        createTaskBlock(task, displayTime);
    }
    inputBox.value ="";
    inputDesc.value ="";
    taskStatus.value="To do";
    saveData()
}

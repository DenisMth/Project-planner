
import { saveData } from "./saveData.js";
import { displayTimer } from "./remainingTime.js";


export function AddTask(tasksArray) {
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

        tasksArray.push(task);

        localStorage.setItem("task1", JSON.stringify(tasksArray));
    
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

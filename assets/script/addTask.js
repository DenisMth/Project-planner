
import { saveData } from "./saveData.js";
import { displayTimer } from "./remainingTime.js";
import { tasks } from "../script.js";

function randomId(){
    return Date.now().toString(16) + Math.floor(Math.random() * 1000).toString(16)
}

export function AddTask() {
    let inputBox = document.getElementById("input-box");
    let listcontainer = document.getElementById("list-container");
    const taskContent = inputBox.value.trim();


    if(taskContent != ''){

        let myId = randomId();

        let task = {
            name:taskContent,
            uniqueId:myId,
            creationDate:new Date(),
            dueDate:new Date(new Date().setDate(new Date().getDate() + 14)),
            done:false,
        };
        let taskElement = document.createElement('div');
        let taskId = 'task'+(task.length + 1);
        taskElement.id = myId
        taskElement.className = 'task';
        taskElement.textContent = taskContent;

      // Ajout de la tâche à la colonne "To Do"
      document.getElementById('todo').appendChild(taskElement);

        tasks.push({ id : taskId, content: taskContent});
        inputBox.value = '';
    }


        localStorage.setItem("tasks", JSON.stringify(tasks));
} 
    

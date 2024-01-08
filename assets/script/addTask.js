
import { saveData } from "./saveData.js";
export function AddTask() {
    let inputBox =document.getElementById("input-box");
    let listcontainer = document.getElementById("list-container");
   

    if(inputBox.value === ''){
        alert("write a task!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "X";
        li.appendChild(span); 
     }
    inputBox.value ='';
    saveData()
}

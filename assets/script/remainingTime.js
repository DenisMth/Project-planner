import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';
//import {format} from "date-fns";

let now = new Date();
let future = new Date(now.setDate(now.getDate() + 14));

function displayExisting(variable, name, elem){
    if (variable){
        let text = document.createTextNode(variable + " " + name + " ");
        elem.appendChild(text);
    }
}

function deleteElement(element){
    let text = element.querySelector("p");
    if (text){
        text.remove();
    }
}

function newTime(future, idSelected){

    let htmlElement = document.getElementById(idSelected);
    deleteElement(htmlElement);

    now = new Date();
    let interval = dateFns.intervalToDuration({start : now, end : future});
    let para = document.createElement("p");
    para.className = "remainingTimer";
    let paraContent = document.createTextNode("");

    for (let element in interval) {
        displayExisting(interval[element], element, para);
    };
    let text = document.createTextNode("remaining");
    para.appendChild(text);

    para.appendChild(paraContent);
    htmlElement.appendChild(para);
    
}

export function displayTimer(future, idSelected){
    setInterval(newTime, 1000, future, idSelected);
}
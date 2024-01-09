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

function deleteTitle(){
    let title = document.querySelector("h1");
    if (title){
        title.remove();
    }
}

function newTime(){

    deleteTitle();

    now = new Date();
    let interval = dateFns.intervalToDuration({start : now, end : future});
    let body = document.querySelector("body");
    let title = document.createElement("h1");
    let titleContent = document.createTextNode("");

    for (let element in interval) {
        displayExisting(interval[element], element, title);
    };
    let text = document.createTextNode("remaining");
    title.appendChild(text);

    title.appendChild(titleContent);
    body.appendChild(title);
    
}

setInterval(newTime, 1000);
//import { displayTimer } from "./remainingTime";
let tasks = [];

export function displayTask(displayTime) {

    let listcontainer = document.getElementById("list-container");
    //listcontainer.innerHTML = localStorage.getItem("data");
    
    if (localStorage.getItem("tasks")){
    const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
}

    tasks.forEach(element => {

        let div = document.createElement("div");

        let span = document.createElement('span');
        span.innerHTML = "X";
        div.appendChild(span); 

        let title = document.createElement("h3");
        let titleContent = document.createTextNode(element.name);
        title.appendChild(titleContent);
        div.appendChild(title);

        let para = document.createElement('p');
        let paraContent = document.createTextNode(element.description);
        para.appendChild(paraContent);
        div.appendChild(para);

        div.id = element.uniqueId;
       
        if(element.status == "To do"){
            let todo = document.getElementById("todo");
            todo.appendChild(div);
        } else if(element.status == "Doing"){
            let doing = document.getElementById("doing");
            doing.appendChild(div);
        } else {
            let done = document.getElementById("done");
            done.appendChild(div);
        }

        let future = new Date(element.dueDate);
        displayTime(future, element.uniqueId);

        /*
        let listElem = document.createElement("li");
        let span = document.createElement("span");
        listElem.id = element.uniqueId;
        let listElemContent = document.createTextNode(element.name);
        let dueDate = new Date(element.dueDate);
        //console.log(dueDate);
        displayTime(dueDate, element.uniqueId);
        let spanContent = document.createTextNode("X");

        listElem.appendChild(listElemContent);
        span.appendChild(spanContent);
        listElem.appendChild(span);
        listcontainer.appendChild(listElem);

        */
    });

}
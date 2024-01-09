export function displayTask() {

    let tasks = [];
    
    if (localStorage.getItem("tasks")){
    const parsedTasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = Array.isArray(parsedTasks) ? parsedTasks : [parsedTasks];
}

    tasks.forEach(element => {
        console.log(element.name + " " + element.dueDate);
    });
   
    let listcontainer = document.getElementById("list-container");
        
    listcontainer.innerHTML = localStorage.getItem("data");

}

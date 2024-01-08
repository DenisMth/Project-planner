export function displayTask() {
 
    let listcontainer = document.getElementById("list-container");
        
    listcontainer.innerHTML = localStorage.getItem("data");

}
displayTask();
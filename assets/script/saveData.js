export function saveData() {
    
    let listcontainer = document.getElementById("list-container");
        
    localStorage.setItem("data", listcontainer.innerHTML);
}

//de variables inputBox en listContainers zijn element/ id's die ik dus van mijn  htlm in javascript binnen breng om functioneel te maken //
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("you must write something bro!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()

}
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();    
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
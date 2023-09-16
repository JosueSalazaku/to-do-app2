//de variables inputBox en listContainers zijn element/ id's die ik dus van mijn  htlm in javascript binnen breng om functioneel te maken //
const inputBox = document.getElementById('iput-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert("you must write something bro!");
    }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
        }
}
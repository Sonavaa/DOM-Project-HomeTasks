"use strict";

const insert_el = document.getElementById("insert"); 
const key = document.getElementsByClassName("key");

window.addEventListener("keydown", function(event) {
    insert_el.innerHTML = `
    <div class="key">
    <small>Key</small>
    <p>${event.key}</p>
    </div>
    
    <div class="key">
    <small>KeyCode</small>
    <p>${event.keyCode}</p>
    </div>
    
    <div class="key">
    <small>Code</small>
    <p>${event.code}</p>
    </div>`
});
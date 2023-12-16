"use strict";
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    if(input.type==="password"){
        input.type="text";
        btn.innerHTML=`<img src="./assets/icons/closeEye.svg" alt="" />`
    }
    else{
        input.type="password";
        btn.innerHTML=`<img src="./assets/icons/openEye.svg" alt="" />`
    }
});

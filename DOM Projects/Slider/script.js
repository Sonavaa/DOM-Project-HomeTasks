"use strict";

const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");
const slider = document.querySelector(".slider-image");

const images = ["beach", "building", "city", "mozaic", "sky"];

let index = 0;

left_btn.addEventListener("click", () => {
    if(index > 0){
        index--;
    }
    else{
        index = images.length-1
    }
});

right_btn.addEventListener("click", () => {
    if(index < images.length-1){
        index++;
    }
    else{
        index = 0
    }
});
console.log(index)


// const showImage = () => {
//     slider.style.backgroundImage = `url("./assets/images/${images[index]}.jpg")`;
// }

// showImage();
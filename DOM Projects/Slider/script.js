"use strict";

const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");
const slider = document.querySelector(".slider-image");

const images = ["beach", "building", "city", "mozaic", "sky"];

let index = 1;

right_btn.addEventListener("click", () => {
    if(index < images.length-1){
        index++;
    }
    else{
        index = 0
    }
    showImage();
});

//On Keyboard, RightArrow Works right
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        if(index < images.length-1){
            index++;
        }
        else{
            index = 0
        }
        showImage();
    }
  });

left_btn.addEventListener("click", () => {
    if(index > 0){
        index--;
    }
    else{
        index = images.length-1
    }
    showImage();
});

//On Keyboard, LeftArrow Works right
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        if(index > 0){
            index--;
        }
        else{
            index = images.length-1
        }
        showImage();
    }
  });

const showImage = () => {
    slider.style.backgroundImage = `url("./assets/images/${images[index]}.jpg")`;
}

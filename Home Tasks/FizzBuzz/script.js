"use strict";

let count = prompt("Enter any number")

if(count%3==0 & count%5===0){
    console.log("FizzBuzz");
}
else if(count%3==0){
    console.log("Fizz");
}
else if(count%5==0){
    console.log("Buzz");
}
else{
    console.log(`${count} is not divisible by 3, 5 or 15`);
}

setInterval(function() {
    location.reload();
}, 1200);

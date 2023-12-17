"use strict";

const strNumber = prompt("Enter at least 2-digit number");
let number = +strNumber
if(number/10 < 1){
    console.log("Number must have at least 2 digits");
}
else{
        for(let i = 0; i <= strNumber.length; i++){
           if(strNumber[i] == strNumber[i+1]){
           strNumber[i] = strNumber[i+1]
        }
         else{
         for(let i = 0; i <= strNumber.length/2; i++){
            if(strNumber[i] == strNumber[length - i]){
        }
         else{
        console.log(`${strNumber} is not a polindrom`);
    }
}
}
}
}

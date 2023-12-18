"use strict";
let string_1 = prompt("Please enter a string");
let string_2 = prompt("Please enter a string");

function checkAnagram(string_1, string_2) {

    let str_1=string_1.toLowerCase().split(" ").sort().join(" ")
    let str_2=string_2.toLowerCase().split(" ").sort().join(" ")
    if (str_1 !== str_2) {
       console.log(`${string_1} and ${string_2} are not anagrams`);
    } else {
        console.log(`${string_1} and ${string_2} are anagrams`);
    }
}

console.log(checkAnagram(string_1, string_2));
"use strict";
const string_1 = prompt("Please enter a string");
const string_2 = prompt("Please enter a string");

function checkAnagram(string_1, string_2) {

    const str_1 = string_1.toLowerCase().split(" ").sort().join(" ")
    console.log(str_1)
    const str_2 = string_2.toLowerCase().split(" ").sort().join(" ")
    console.log(str_2)
    if (str_1 !== str_2) {
       console.log(`${str_1} and ${str_2} are not anagrams`);
    } else {
        console.log(`${str_1} and ${str_2} are anagrams`);
    }
}

console.log(checkAnagram(string_1, string_2));
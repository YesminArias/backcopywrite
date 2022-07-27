const { Router } = require("express");
const router = Router();

function reverseString(text) {
   var newText= text.split("").reverse().join(" ")
    console.log(newText)
    return newText;
 }


module.exports = reverseString;
const { Router } = require("express");
const router = Router();

function reverseString(text) {
   var newText = text.split("").reverse().join("")

   return newText;
}


module.exports = reverseString;
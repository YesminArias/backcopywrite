const { Router } = require("express");
const reverseString = require("../service/service");
const router = Router();
const palindrome = require("../service/service")

router.get("/", async (req, res) => {

    const { text } = req.query;

    function palindrome(text) {

        var newText = text.split("").reverse().join("").toUpperCase().replace(/ /g, "");
        var antText = text.replace(/ /g, "").toUpperCase();
        if (newText == antText) {
            return true;
        }
        return false;
    }

    if (text) {
        const newText = reverseString(text);
        const textPali = palindrome(text);

        const resultNewText = {
            text: newText,
            palindrome: textPali
        }
        res.status(200).json(resultNewText);
    } else {
        const respuesta = {
            error: "no text",
        }
        res.status(400).json(respuesta);
    }

});



module.exports = router;
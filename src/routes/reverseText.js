const { Router } = require("express");
const reverseString = require("../service/service");
const router = Router();

router.get("/", async (req, res) => {

  const { text } = req.query;
    
  if (text) {
    const newText = reverseString(text);
    res.status(200).json(newText);
  } else {
    const respuesta = {
        error: "no text",
    }
    res.status(400).json(respuesta);
  }
   
});
   


module.exports = router;
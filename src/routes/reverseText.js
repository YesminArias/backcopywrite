const { Router } = require('express')
const reverseString = require('../service/service')
const palindrome = require('../service/validatePalindrome')

const router = Router()

router.get('/', async (req, res) => {
  const { text } = req.query
  

  if (text) {
    const newText = reverseString(text)
    const textPali = palindrome(text)

    const resultNewText = {
      text: newText,
      palindrome: textPali
    }
    res.status(200).json(resultNewText)
  } else {
    const respuesta = {
      error: 'no text'
    }
    res.status(400).json(respuesta)
  }
})

module.exports = router

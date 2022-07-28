function palindrome (text) {
    const newText = text.split('').reverse().join('').toUpperCase().replace(/ /g, '')
    const antText = text.replace(/ /g, '').toUpperCase()
    if (newText === antText) {
      return true
    }
    return false
  }

  module.exports = palindrome
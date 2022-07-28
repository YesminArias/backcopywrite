const reverseString = require('../src/service/service')
const palindrome = require('../src/service/validatePalindrome')
const expect = require('chai').expect

describe('test revese text', () => {
  it('el texto anita lava la tina debe retornar alreves', () => {
    expect(reverseString('anita lava la tina')).to.equal('anit al aval atina')
  })
})

describe('test validate palindrome', () => {
  it('el texto "anita lava la tina" debe retornar que es palindrome', () => {
    expect(palindrome('anita lava la tina')).to.equal(true)
  })
  it('el texto "carro rojo" debe retornar que no es palindrome', () => {
    expect(palindrome('carro rojo')).to.equal(false)
  })
})

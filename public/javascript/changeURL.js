function changeURL(url) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const all = lowerCaseLetters.split('').concat(upperCaseLetters.split('').concat(numbers.split('')))
  let newURL = 'http://localhost:3000/gogo/'

  for(let i = 0;i <5;i++){
    let pickUp = Math.floor(Math.random()*all.length)
    newURL += all[pickUp]
  }

  return newURL
}

module.exports = changeURL
function getAlphabet() {
  let output = ""

  for (let i = 97; i <= 122; i++) {
    output += getLetterFromCharCode(i)
  }

  return output
}


function getLetterFromCharCode(code) {
  return String.fromCharCode(code)
}

console.log(getAlphabet())
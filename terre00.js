function getAlphabet() {
  let output = ""

  for (let i = 97; i <= 122; i++) {
    output += String.fromCharCode(i)
  }

  return output
}

console.log(getAlphabet())
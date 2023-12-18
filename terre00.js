const frenchAlphabet = "abcdefghijklmnopqrstuvwxyz"

function displayAlphabet (alphabet) {
  let output = ""

  for (const letter of alphabet) {
    output += letter
  }

  return output
}

console.log(displayAlphabet(frenchAlphabet))
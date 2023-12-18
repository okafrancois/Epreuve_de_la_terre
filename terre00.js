const frenchAlphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'x', 'y', 'z'
]

function displayAlphabet (alphabet) {
  let result = ""

  alphabet.forEach((letter) => {
    result += letter.toLowerCase()
  })

  return result
}

console.log((displayAlphabet(frenchAlphabet)))
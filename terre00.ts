const frenchAlphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'x', 'y', 'z'
]

function displayAlphabet (alphabet) {
  let render = ""

  alphabet.forEach((letter) => {
    render += letter.toLowerCase()
  })

  console.log(render)
}

displayAlphabet(frenchAlphabet)
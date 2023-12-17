
const frenchAlphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'x', 'y', 'z'
]
function displayAlphabetFromStartPoint(startPoint) {

  let result = "The provide letter is not part of the french alphabet"

  const startIndex = frenchAlphabet.findIndex((letter) => letter.toLowerCase() === startPoint.toLowerCase())

  if (startIndex !== -1) {
    result = ""

    for (let i = startIndex; i < frenchAlphabet.length; i++) {
      result += frenchAlphabet[i]
    }
  }

  console.log(result)
}

displayAlphabetFromStartPoint(process.argv[2])
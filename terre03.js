
const frenchAlphabet = "abcdefghijklmnopqrstuvwxyz"
function displayAlphabetFromStartPoint(startPoint) {
  if (!startPoint) {
    return "No letter provided"
  }

  let output = "The provided letter is not part of the french alphabet"

  const startIndex = frenchAlphabet.indexOf(startPoint.toLowerCase())

  if (startIndex !== -1) {
    output = ""

    for (let i = startIndex; i < frenchAlphabet.length; i++) {
      output += frenchAlphabet[i]
    }
  }

  return output
}

console.log(displayAlphabetFromStartPoint(process.argv[2]))
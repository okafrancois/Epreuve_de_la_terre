
function getAlphabetFrom(args) {
  if (!isValid(args)) {
    return "Error: no valid character argument provided"
  }

  const [character] = args

  if (!isAlphabetLetter(character)) {
    return "Error: provided character is not an alphabet letter"
  }

  let output = "";
  const starPointCode = character.toLowerCase().charCodeAt(0)

  for (let i = starPointCode; i < 122; i++) {
    output += String.fromCharCode(i)
  }

  return output
}

function isAlphabetLetter(character) {
  return /^[a-zA-Z]$/.test(character);
}
function isValid(argItems) {
  return !(argItems === undefined || argItems === null || argItems?.length === 0);
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getAlphabetFrom(getNodeProcessArgs()))
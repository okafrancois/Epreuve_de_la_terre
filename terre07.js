function getStringLength(args) {
  if (!isValid(args)) {
    return "Error: too much or no valid data provided"
  }

  const [providedString] = args

  let count = 0

  for (const textTableKey in providedString.split("")) {
    count++
  }

  return `${count}`
}

function isValid(args) {
  return args && args.length === 1
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getStringLength(getNodeProcessArgs()))
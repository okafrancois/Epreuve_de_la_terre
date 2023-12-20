function powerNumber(args) {
  const [isValid, errorMessage] = checkValidity(args)

  if (!isValid) {
    return errorMessage
  }

  const [value, exponent] = args

  let result = value

  for (let i = exponent; i > 1; i--) {
    result = result * value
  }

  return result
}

function checkValidity(args) {
  if (args.length !== 2) {
    return [false, "Error: not enough or too much item provided (expecting 2)"]
  }

  if (isNaN(Number(args[0])) || isNaN(Number(args[1]))) {
    return [false, "Error: provided data are invalid (expecting 2 numbers)"]
  }

  if (Number(args[1]) < 0) {
    return [false, "Error: exponent cannot be a negative number"]
  }

  return [true, ""]
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(powerNumber(getNodeProcessArgs()))
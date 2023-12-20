function isPrimeNumber(args) {
  const [isValid, errorMessage] = checkValidity(args)

  if (!isValid) {
    return errorMessage
  }

  const value = Number(args[0])


  if (value < 2) {
    return `${value} is not a prime`
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return `${value} is not a prime`;
    }
  }

  return `${value} is a prime`;
}

function checkValidity(args) {
  if (args.length !== 1) {
    return [false, "Error: not enough or too much item provided (expecting 1)"]
  }

  if (isNaN(Number(args[0])) || Number(args[0]) < 0) {
    return [false, "Error: provided data are invalid (expecting a positive number)"]
  }

  if (Number(args[1]) < 0) {
    return [false, "Error: cannot calculate the square root of a negative number"]
  }

  return [true, ""]
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(isPrimeNumber(getNodeProcessArgs()))
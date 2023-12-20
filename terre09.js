function getSquareRoot(args) {
  const [isValid, errorMessage] = checkValidity(args)

  if (!isValid) {
    return errorMessage
  }

  const value = Number(args[0])

  if (value === 0 || value === 1) {
    return value
  }

  const accuracy = 0.000001;
  let lowerBound = 0, upperBound = value, mid

  while (upperBound - lowerBound > accuracy) {
    mid = (lowerBound + upperBound) / 2;

    if (mid * mid > value) {
      upperBound = mid;
    } else {
      lowerBound = mid;
    }
  }

  return Math.round(mid);
}

function checkValidity(args) {
  if (args.length !== 1) {
    return [false, "Error: not enough or too much item provided (expecting 2)"]
  }

  if (isNaN(Number(args[0]))) {
    return [false, "Error: provided data are invalid (expecting a number)"]
  }

  if (Number(args[1]) < 0) {
    return [false, "Error: cannot calculate the square root of a negative number"]
  }

  return [true, ""]
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getSquareRoot(getNodeProcessArgs()))
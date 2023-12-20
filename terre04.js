function isEvenOrOdd(args) {
  if (!isValid(args)) {
   return "No valid argument was provided"
  }

  const providedValue = Number(args[0])

  if (isNaN(providedValue)) {
    return "The provided value is not a number"
  }

  return providedValue % 2 ===  0 ? "pair" : "impair"
}

function isValid(argItems) {
  return !(argItems === undefined || argItems === null || argItems.length !== 1);
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(isEvenOrOdd(getNodeProcessArgs()))
function isSorted(args) {
  const [isValid, errorMessage] = checkValidity(args)

  if (!isValid) {
    return errorMessage
  }

  const formattedNumbers = args.map(numberSting => Number(numberSting));

  for (let currentIndex = 0; currentIndex < formattedNumbers.length - 1; currentIndex++) {
    if (formattedNumbers[currentIndex] > formattedNumbers[currentIndex + 1]) {
      return "Not sorted !";
    }
  }

  return "Sorted !";
}

function checkValidity(args) {
  if (args.length === 0) {
    return [false, "Error: no data provided"];
  }

  const formattedArgs = args.map(numberStr => Number(numberStr));

  if (formattedArgs.some(isNaN)) {
    return [false, "Error: Invalid data provided (expecting numbers only)"];
  }

  return [true, ""];
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(isSorted(getNodeProcessArgs()));
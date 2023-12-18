function getMiddleValue(values) {
  if (values.length > 3) {
    return "Error: Too much numbers were provided"
  }

  let firstNumber = parseInt(values[0]), secondNumber = parseInt(values[1]), thirdNumber = parseInt(values[2]);

  if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    return "Error: Invalid data provided";
  }

  if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
    return "Error: identical values";
  }

  if ((firstNumber > secondNumber && firstNumber < thirdNumber) || (firstNumber > thirdNumber && firstNumber < secondNumber)) {
    return firstNumber;
  } else if ((secondNumber > firstNumber && secondNumber < thirdNumber) || (secondNumber > thirdNumber && secondNumber < firstNumber)) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
}

console.log(getMiddleValue(process.argv.slice(2)))
function divideNumbers(number1, number2) {
  const firstNumber = parseInt(number1)
  const secondNumber = parseInt(number2)

  if (secondNumber === 0) {
    return "Can't divide by 0 -_-"
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return  "Provided data invalid -_-"
  } else {
    const divisionResult = Math.floor(firstNumber/secondNumber)

    const remainder = firstNumber % secondNumber

    return `Result: ${divisionResult} \n Reste: ${remainder}`
  }
}

console.log(divideNumbers(process.argv[2], process.argv[3]))
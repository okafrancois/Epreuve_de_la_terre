function powerNumber(number1, number2) {
  const firstNumber = parseInt(number1)
  const secondNumber = parseInt(number2)

  if (secondNumber < 0) {
    return "Error: Exponent cannot be a negative number."
  }

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return  "Error: Invalid data."
  } else {
    let result = number1

    for (let i = number2; i > 1; i--) {
        result = result * number1
    }

    return result
  }
}

console.log(powerNumber(process.argv[2], process.argv[3]))
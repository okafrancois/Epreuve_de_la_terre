function isPrimeNumber(numberItem) {
  const number = parseInt(numberItem)

  if (isNaN(number) || number < 0) {
    return "Error: please provide a valid number"
  }

  if (number < 2 || (number > 2 && number % 2 ===  0)) {
    return `${number} is not a prime`
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return `${number} is not a prime`;
    }
  }

  return `${number} is a prime`;
}

console.log(isPrimeNumber(process.argv[2]))
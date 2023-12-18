function isEvenOrOdd(number) {
  let output = "No number was provided"

  if (number && isNaN(number)) {
    output = "The provided value is not a number"
  } else {
    output = number % 2 ===  0 ? "pair" : "impair"
  }

  return output
}

console.log(isEvenOrOdd(process.argv[2]))
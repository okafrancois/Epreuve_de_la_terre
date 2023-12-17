function isEvenOrOdd(number) {
  let output = "No number where provided"

  if (number && isNaN(number)) {
    output = "The provided value is not a number"
  } else {
    output = number % 2 ===  0 ? "pair" : "impair"
  }

  console.log(output)
}

isEvenOrOdd(process.argv[2])
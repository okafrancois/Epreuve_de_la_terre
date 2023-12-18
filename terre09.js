function getSquareRoot(numberItem) {
  const number = parseInt(numberItem)

  if (isNaN(number) || number < 0) {
    return "Error: please provide a valid number"
  }

  if (numberItem === 0 || numberItem === 1) {
    return numberItem;
  }

  let count =  0

  let lowerBound = 0;
  let upperBound = number;
  let mid;
  const accuracy = 0.000001;

  while (upperBound - lowerBound > accuracy) {
    mid = (lowerBound + upperBound) / 2;
    if (mid * mid > number) {
      upperBound = mid;
    } else {
      lowerBound = mid;
    }
  }
  return Math.round(mid);
}

console.log(getSquareRoot(process.argv[2]))
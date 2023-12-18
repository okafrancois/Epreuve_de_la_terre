function isSorted(numbers) {
  let isInvalid = false;

  const formattedNumbers = numbers.map(item => {
    const number = parseInt(item);
    if (isNaN(number)) {
      isInvalid = true;
    }
    return number;
  });

  if (isInvalid) {
    return "Error: invalid data provided";
  }

  for (let currentIndex = 0; currentIndex < formattedNumbers.length - 1; currentIndex++) {
    if (formattedNumbers[currentIndex] > formattedNumbers[currentIndex + 1]) {
      return "Not sorted !";
    }
  }

  return "Sorted !";
}

console.log(isSorted(process.argv.slice(2)));
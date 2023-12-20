function getMiddleValue(values) {
  const [isValid, errorMessage] = checkValidity(values)

  if (!isValid) {
    return errorMessage
  }

  const sortedValues = bubbleSort(values.map(numberString => Number(numberString)))

  return sortedValues[1]
}

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {

        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return arr;
}

function checkValidity(args) {
  if (args.length !== 3) {
    return [false, "Error: not enough or too much item provided (expecting 3)"]
  }

  const value1 = Number(args[0]),
      value2 = Number(args[1]),
      value3 = Number(args[2]);

  if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
    return [false, "Error: Invalid data provided (expecting numbers only)"];
  }

  if (value1 === value2 || value1 === value3 || value2 === value3  ) {
    return [false, "Error: Invalid data provided (expecting 3 different values)"];
  }

  return [true, ""]
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getMiddleValue(getNodeProcessArgs()))
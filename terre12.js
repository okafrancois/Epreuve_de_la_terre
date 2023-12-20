function convertTo24Format(args) {
  const [isValid, errorMessage] = checkValidity(args)

  if (!isValid) {
    return errorMessage
  }

  const [timeString] = args

  const period = timeString.slice(timeString.length - 2)

  const [hours, minutes] = timeString.slice(0, timeString.length - 2).split(":")


  if (period === "PM") {
    return `${Number(hours) + 12}:${minutes}`
  } else {
    return  `${hours}:${minutes}`
  }
}

function checkValidity(args) {
  if (args.length !== 1) {
    return [false, "Error: not enough or too much item provided (expecting 1)"]
  }

  const expectedFormat = /^(0?[1-9]|1[0-2]):([0-5][0-9])(AM|PM)$/i;
  if (!expectedFormat.test(args[0])) {

    return [false, "Error: The provided time is invalid (expected: hh:mmAM|PM)."]
  }

  return [true, ""]
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}
console.log(convertTo24Format(getNodeProcessArgs()))
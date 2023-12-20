function convertTo12Format(args) {
  const [isValid, errorMessage] = checkValidity(args)

  if (!isValid) {
    return errorMessage
  }

  const hours = Number(args[0].split(":")[0])
  const minutes = Number(args[0].split(":")[1])

  return convertTime(hours, minutes)
}

function convertTime(hours, minutes) {
  if (hours > 0 && hours < 12) {
    return `${hours}:${minutes}AM`;
  } else if (hours === 0) {
    return `12:${minutes}AM`;
  } else if (hours === 12) {
    return `12:${minutes}PM`;
  } else {
    hours -= 12;
    return `${hours}:${minutes}PM`;
  }
}

function checkValidity(args) {
  if (args.length !== 1) {
    return [false, "Error: not enough or too much item provided (expecting 1)"]
  }

  const expectedFormat = /^(2[0-4]|[01]?[0-9]):([0-5][0-9])$/i;
  if (!expectedFormat.test(args[0])) {

    return [false, "Error: The provided time is invalid (expected: HH:MM)."]
  }

  return [true, ""]
}
function getNodeProcessArgs() {
  return process.argv.slice(2)
}
console.log(convertTo12Format(getNodeProcessArgs()))
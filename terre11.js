function convertTo12Format(hour) {

  if (isTimeInvalid(hour)) {
    return isTimeInvalid(hour)
  }

  const [hours, minutes] = hour.split(":")

  if (hours <= 12) {
    return `${hours}:${minutes}AM`
  } else {
    return  `${hours - 12}:${minutes}PM`
  }
}

function isTimeInvalid(hour) {
  const expectedFormat = /^(2[0-4]|[01]?[0-9]):([0-5][0-9])$/i;
  if (!expectedFormat.test(hour)) {
    return "Error: The provided time is invalid (expected: HH:MM)."
  }
}

console.log(convertTo12Format(process.argv[2]))
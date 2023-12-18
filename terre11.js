function convertTo12Format(hour) {

  if (checkHourValidity(hour)) {
    return checkHourValidity(hour)
  }

  const [hours, minutes] = hour.split(":")

  if (hours <= 12) {
    return `${hours}:${minutes}AM`
  } else {
    return  `${hours - 12}:${minutes}PM`
  }
}

function checkHourValidity(hour) {
  const expectedFormat = /\d\d:\d\d/i;
  const [hours, minutes] = hour.split(":")

  if (!expectedFormat.test(hour)) {
    return "Error: The provided time is not in the expected format (HH:MM)."
  }

  if (isNaN(parseInt(hours)) || parseInt(hours) > 24 || parseInt(hours) < 1 || isNaN(parseInt(minutes)) || parseInt(minutes) > 60 || parseInt(minutes) < 1) {
    return `Error: The provided time is invalid.`
  }
}

console.log(convertTo12Format(process.argv[2]))
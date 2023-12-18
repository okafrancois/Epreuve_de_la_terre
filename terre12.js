function convertTo24Format(hourString) {

  if (isTimeInvalid(hourString)) {
    return isTimeInvalid(hourString)
  }

  const periodIndex = hourString.search(/(AM|PM)$/i)

  const period = hourString.slice(periodIndex)

  const [hours, minutes] = hourString.split(period)[0].split(":")

  if (period === "PM") {
    return `${parseInt(hours) + 12}:${minutes}`
  } else {
    return  `${hours}:${minutes}`
  }
}

function isTimeInvalid(hour) {
  const expectedFormat = /^(0?[1-9]|1[0-2]):([0-5][0-9])(AM|PM)$/i;

  if (!expectedFormat.test(hour)) {
    return `Error: The provided time is invalid (expected: hh:mmAM|PM).`
  }
}

console.log(convertTo24Format(process.argv[2]))
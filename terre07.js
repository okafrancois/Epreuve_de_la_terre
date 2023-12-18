function displayChartLength(params) {
  if (params.length > 3) {
    return "Error: Too much items";
  }

  if (!isNaN(parseInt(params[2]))) {
    return "Error: numbers not allowed"
  }

  let count = 0
  const textTable = params[2].split("")

  textTable.forEach(letter => {
    count++
  })

  return `${count}`
}

console.log(displayChartLength(process.argv))
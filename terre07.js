function displayChartLength(params) {
  if (params.length > 1) {
    return "Error: Too much items";
  }

  if (!isNaN(parseInt(params[0]))) {
    return "Error: numbers not allowed"
  }

  let count = 0
  const textTable = params[0].split("")

  textTable.forEach(letter => {
    count++
  })

  return `${count}`
}

console.log(displayChartLength(process.argv.slice(2)))
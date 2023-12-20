function getDivisionResult(args) {
  if (!isValid(args)) {
    return "Error: Provided data are invalid (expecting 2 numbers)"
  }

  const value1 = Number(args[0])
  const value2 = Number(args[1])

  const divisionResult = value1/value2

  const remainder = value1 % value2

  return `Result: ${divisionResult} \n Remain: ${remainder}`
}

function isValid(args) {
  return args.length === 2 && !isNaN(Number(args[0])) && !isNaN(Number(args[1]))
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getDivisionResult(getNodeProcessArgs()))
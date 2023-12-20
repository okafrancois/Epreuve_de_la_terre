function displayNodeProcessArgs() {
  const args = getNodeProcessArgs()

  if (!isValid(args)) {
    console.log("Error: no argument provided")
  }

  for (const arg of args) {
    console.log(arg)
  }
}

function isValid(argItems) {
  return !(argItems === undefined || argItems === null || argItems?.length === 0);
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}


displayNodeProcessArgs()
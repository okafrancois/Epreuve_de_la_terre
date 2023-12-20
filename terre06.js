function getReversed(args){
 if (!isValid(args)) {
   return "Error: invalid provided data"
 }

 const [text] = args

 let reversedResult = ""
 const textTable = text.split("")

  for (let i = textTable.length - 1; i >= 0; i--) {
    reversedResult += textTable[i]
  }

  return  reversedResult
}

function isValid(args) {
  return args && args.length === 1
}

function getNodeProcessArgs() {
  return process.argv.slice(2)
}

console.log(getReversed(getNodeProcessArgs()))
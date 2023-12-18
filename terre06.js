function reverseChart(text){
 if (!text) {
   return "No text provide"
 }

 let reversedResult = ""
 const textTable = text.split("")

  for (let i = textTable.length - 1; i >= 0; i--) {
    reversedResult += textTable[i]
  }

  return  reversedResult
}

console.log(reverseChart(process.argv[2]))
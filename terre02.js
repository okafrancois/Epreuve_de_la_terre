function displayParams(params) {
  let result = "";

  for (let i = 0; i < params.length; i++) {
    result += params[i] + "\n";
  }

  return result;
}

console.log(displayParams(process.argv.slice(2)));
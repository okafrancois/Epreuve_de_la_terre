function displayParams(params) {
  let result = "";

  for (let i = 0; i < params.length; i++) {
    result += params[i] + "\n";
  }

  console.log(result);
}

displayParams(process.argv.slice(2));
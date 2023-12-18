function displayCurrentFileName() {
  return  __filename.split("/").pop();
}

console.log(displayCurrentFileName());
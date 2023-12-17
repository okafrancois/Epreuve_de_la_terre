function displayCurrentFileName() {
  const fileName = __filename.split("/").pop();

  console.log(fileName)
}

displayCurrentFileName();
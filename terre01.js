function getCurrentFileName() {
  return  __filename.split("/").pop();
}

console.log(getCurrentFileName());
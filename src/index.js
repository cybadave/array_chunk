const arrayChunk = (inputArray, chunkCount) => {
  const cloneInput = [...inputArray]; // Don't mutate the input array
  const chunkLength = Math.ceil(cloneInput.length / chunkCount);
  let outputArray = [];
  while(cloneInput.length > 0){
    let chunk = [];
    let element = true;
    while(chunk.length < chunkLength && element){
      element = cloneInput.shift();
      element && chunk.push(element);
    }
    outputArray.push(chunk);
  }
  return outputArray;
}
export default arrayChunk;
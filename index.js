function findMinAndRemove(array){
    let minIndex = array.indexOf(Math.min(...array))
  return array.splice(minIndex,1)
}

function selectionSort(array){
    let sortedArray = [];
  const originalLength = array.length
  for (let i = 0; i < originalLength; i++) {
    sortedArray.push(findMinAndRemove(array)[0])
  }
  return sortedArray
}

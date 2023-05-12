function selectionSort(array) {
    // get the length of the input array
    const length = array.length;
  
    // loop through the array
    for (let i = 0; i < length - 1; i++) {
      // set the current index as the minimum index
      let minIndex = i;
  
      // loop through the remaining unsorted elements and find the minimum value
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // swap the current element with the minimum element found
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
  
    // return the sorted array
    return array;
  }
  

module.exports = selectionSort;
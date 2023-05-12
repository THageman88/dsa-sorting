function insertionSort(array) {
    // get the length of the input array
    const length = array.length;
    
    // loop through the array starting at the second element
    for (let i = 1; i < length; i++) {
      // get the current element to insert into the sorted subarray
      const current = array[i];
      let j = i - 1;
  
      // move elements of the sorted subarray that are greater than current
      // to one position ahead of their current position
      while (j >= 0 && array[j] > current) {
        array[j+1] = array[j];
        j--;
      }
  
      // insert the current element at the correct position in the sorted subarray
      array[j+1] = current;
    }
    // return the sorted array
    return array;
  }
  

module.exports = insertionSort;
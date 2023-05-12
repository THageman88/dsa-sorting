function bubbleSort(array) {
  // get the length of the input array
  const length = array.length;
  
  // loop through the array
  for (let i = 0; i < length; i++) {
    // inner loop to perform comparison and swapping
    for (let j = 0; j < length - i - 1; j++) {
      // compare adjacent elements in the array
      if (array[j] > array[j+1]) {
        // swap elements if they are in the wrong order
        // declare temp variable here using const
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  // return the sorted array
  return array;
}


module.exports = bubbleSort;
function merge(leftArr, rightArr) {
    let resultArr = [], leftIndex = 0, rightIndex = 0;
  
    // while there are still elements in both arrays
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      // compare the current elements of both arrays
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        // if the left element is smaller, push it into the result array and move to the next left element
        resultArr.push(leftArr[leftIndex]);
        leftIndex++; 
      } else {
        // if the right element is smaller, push it into the result array and move to the next right element
        resultArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    // concatenate the remaining elements of either the left or right array (whichever still has elements) onto the result array
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  }
  
  function mergeSort(arr) {
    // base case: return the array if it's empty or has only one element
    if (arr.length <= 1) {
      return arr;
    }
  
    // calculate the middle index of the array
    const middle = Math.floor(arr.length / 2);
  
    // recursively call mergeSort on the left and right halves of the array
    const leftArr = mergeSort(arr.slice(0, middle));
    const rightArr = mergeSort(arr.slice(middle));
  
    // merge the two sorted halves together using the merge function
    return merge(leftArr, rightArr);
  }
  

module.exports = { merge, mergeSort};
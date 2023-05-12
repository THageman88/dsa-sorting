// pivot function selects the first element as pivot
function pivot(arr, start = 0, end = arr.length - 1) {
    // grab pivot value from the start of the array
    let pivot = arr[start];
    // track pivot index
    let pivotIndex = start;
  
    // loop through array starting at second element
    for (let i = start + 1; i <= end; i++) {
      // if current element is less than pivot
      if (arr[i] < pivot) {
        // increment pivot index
        pivotIndex++;
        // swap current element with element at pivot index
        [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
      }
    }
  
    // swap pivot element with element at pivot index
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  
    // return pivot index
    return pivotIndex;
  }
  
  // quickSort function uses recursion to sort array
  function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case: return array when left index is greater than or equal to right index
    if (left >= right) return arr;
  
    // call pivot function to get pivot index
    let pivotIndex = pivot(arr, left, right);
  
    // recursively call quickSort on left and right subarrays
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  
    // return sorted array
    return arr;
  }
  
  

module.exports = quickSort;
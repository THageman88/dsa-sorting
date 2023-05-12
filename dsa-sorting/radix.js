function radixSort(arr) {
    const maxNum = Math.max(...arr) // get the maximum number in the array
    let divisor = 1 // set the divisor to 1
  
    while (divisor <= maxNum) {
      const buckets = Array.from({ length: 10 }, () => []) // create 10 empty buckets for each digit
  
      for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / divisor) % 10 // get the digit of the current element
        buckets[digit].push(arr[i]) // add the current element to the corresponding bucket
      }
  
      arr = [].concat(...buckets) // concatenate all the buckets back into the array
      divisor *= 10 // increment the divisor by 10
    }
  
    return arr // return the sorted array
  }
  

module.exports = radixSort;
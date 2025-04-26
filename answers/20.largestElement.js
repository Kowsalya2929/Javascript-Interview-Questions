function largeEle(arr){
    return Math.max(...arr)
}

console.log(largeEle([1,9,3,4]))

// Explanation of largeEle(arr) function:

// Math.max():

// The Math.max() method returns the largest of the numbers passed as arguments.

// However, Math.max() does not accept an array directly. It requires a list of numbers as arguments, not an array.

// Spread Operator (...):

// The spread operator (...) is used to expand the array into individual elements so that Math.max() can evaluate them as separate arguments.

// It turns an array like [1, 9, 3, 4] into 1, 9, 3, 4.

// Result:

// Math.max(...arr) will then return the largest number in the array arr.
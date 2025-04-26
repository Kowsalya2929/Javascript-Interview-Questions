function removeDub(arr){
    let filteredArray = arr.filter((value,index,numbers)=>{
        return numbers.indexOf(value) == index
    })
    return filteredArray;
}

console.log(removeDub([2,1,3,45,45,1]))

// Explanation:

// arr.filter():
// The filter() method goes through each element of the array arr one by one and checks whether it satisfies a condition. If the condition is true, the element is kept; otherwise, it’s skipped.

// numbers.indexOf(value) == index:

// numbers.indexOf(value): Finds the first occurrence index of value in the array.

// == index: Compares that first occurrence index with the current index (index) of the element.

// If they match, it means the value is appearing for the first time at that index, so it’s kept.

// If they don’t match, it means that value has appeared earlier in the array, so it’s skipped.

// Step-by-step Execution:
// For the input array [2, 1, 3, 45, 45, 1]:

// Value = 2, Index = 0:

// numbers.indexOf(2) is 0 (the first index of 2).

// The current index is also 0, so the value 2 is kept.

// Value = 1, Index = 1:

// numbers.indexOf(1) is 1 (the first index of 1).

// The current index is also 1, so the value 1 is kept.

// Value = 3, Index = 2:

// numbers.indexOf(3) is 2 (the first index of 3).

// The current index is also 2, so the value 3 is kept.

// Value = 45, Index = 3:

// numbers.indexOf(45) is 3 (the first index of 45).

// The current index is also 3, so the value 45 is kept.

// Value = 45, Index = 4:

// numbers.indexOf(45) is 3 (the first index of 45).

// The current index is 4, so the value 45 is a duplicate and is skipped.

// Value = 1, Index = 5:

// numbers.indexOf(1) is 1 (the first index of 1).

// The current index is 5, so the value 1 is a duplicate and is skipped.
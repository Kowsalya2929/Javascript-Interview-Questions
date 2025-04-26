function sortArr(arr){
    return arr.sort()
}

console.log(sortArr([1,5,10]))
console.log(sortArr(["banana","applie","kowsi"]))

// Explanation:

// The sortArr function takes an array arr as input.

// It uses the built-in JavaScript sort() method.

// sort():

// For numbers, it sorts by converting them to strings and then comparing unicode values, not actual numeric values.

// Internally, it converts numbers to strings: "1", "5", "10".

// It sorts by string unicode order, so result is:

// [1, 10, 5].

// For strings with char , it sorts them alphabetically.
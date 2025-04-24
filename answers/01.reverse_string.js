const str = "Hello!"

const reverseStr = str.split("").reverse().join("")

console.log(reverseStr)


//Explanation

//1.step => split() method, It turns the string into array of characters ["h", "e", "l", "l", "o"].

//2.step => reverse() method, Reverses the array ["o", "l", "l", "e", "h"].

//3.step => join() method, Joins the array back into a string "olleh".

function isPalindrome(str){
    const strLowerCased = str.toLowerCase()
    const strReversed = strLowerCased.split("").reverse().join("")
    return strLowerCased === strReversed ? "It is a plaindrome" : "It is not a palindrome";   
}

console.log(isPalindrome("Mam"))        //It is a plaindrome 
console.log(isPalindrome("kowsalya"))   //It is not a palindrome
console.log(isPalindrome("wow"))        //It is a plaindrome
console.log(isPalindrome("malayalam"))  //It is a plaindrome
console.log(isPalindrome("Car"))        //It is not a palindrome

//Explanation

//1st variable

//1.step => toLowerCase() method , this is string into lowercase like "Car" as "car".

//2nd variable

//2.step => split() method , It turns the string into array of characters ["c","a","r"].

//3.step => reverse() method , Reverses the array ["r","a","c"].

//4.step => join() method , Joins the array back into string "rac"

//return statement is comparision operator like 1st variable === 2nd variable

//5.step => === , In this triple equal to check the value and datatype, both are same then it will come true otherwise it will come false.  

//"car" === "rac" , In this value isn't equal and datatype is equal like both are string datatype.

//So, the answer is It is not a palindrome.
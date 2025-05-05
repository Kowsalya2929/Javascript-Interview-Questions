:octocat: Coming Soon — The Ultimate JavaScript + DSA in JavaScript Interview Guide! 👌🔥

<h2>Javascript :-</h2>

1. Arrays in Javascript :

 <ul>
 <li><a href="https://github.com/Kowsalya2929/Javascript-Interview-Questions/blob/main/JS/Arrays/Full-Tutorial.md">Zero to Hero Concepts in Array</a></li>
 <li><a href="https://github.com/Kowsalya2929/Javascript-Interview-Questions/blob/main/JS/Arrays/Practice-QA.md">Practice Questions with Answers</a></li>
 </ul>

<h2>JavaScript Interview Questions :-</h2>

1. Reverse a string
2. Check if a string is a palindrome
3. Fibonacci Series
4. How to add two numbers
5. Find square root of a number
6. Swap two numbers 
7. How to generate random number
8. Check if a number is positive, negative or zero
9. Check if a number is odd or even
10. Swap two numbers without using third variable
11. Find largest number among 3 numbers
12. Check Prime number
13. Find factorial of number
14. How to take input using readline
15. Display multiplication table
16. Print all prime numbers in an interval in javascript
17. Check armstrong number
18. Sort an array
19. Merge two arrays
20. Find the largest element in an array
21. Remove dublicates from an array

<h2>Answers:-</h2>

<h3>1. Reverse a string</h3>

<h5>Explanation</h5>
<ul>
  <li>1.step => split() method, It turns the string into array of characters ["h", "e", "l", "l", "o"].</li>
  <li>2.step => reverse() method, Reverses the array ["o", "l", "l", "e", "h"].</li>
  <li>3.step => join() method, Joins the array back into a string "olleh".</li>
</ul>

```ini
const str = "Hello!"
const reverseStr = str.split("").reverse().join("")
console.log(reverseStr)
```

<h3>2. Check if a string is a palindrome</h3>

<h5>Explanation</h5>
<ul>
  <li>1st variable</li>
  <li>1.step => toLowerCase() method , this is string into lowercase like "Car" as "car".</li>
  <li>2nd variable</li>
  <li>2.step => split() method , It turns the string into array of characters ["c","a","r"].</li>
  <li>3.step => reverse() method , Reverses the array ["r","a","c"].</li>
  <li>4.step => join() method , Joins the array back into string "rac".</li>
  <li>return statement is comparision operator like 1st variable === 2nd variable</li>
  <li>5.step => === , In this triple equal to check the value and datatype, both are same then it will come true otherwise it will come false.</li>
  <li>"car" === "rac" , In this value isn't equal and datatype is equal like both are string datatype.</li>
  <li>So, the answer is It is not a palindrome.</li>
</ul>

```ini
function isPalindrome(str){
    const strLowerCased = str.toLowerCase()
    const strReversed = strLowerCased.split("").reverse().join("")
    return strLowerCased === strReversed ? "It is a palindrome " : "It is not a palindrome";   
}
console.log(isPalindrome("Mam"))        //It is a palindrome  
console.log(isPalindrome("kowsalya"))   //It is not a palindrome
console.log(isPalindrome("wow"))        //It is a palindrome 
console.log(isPalindrome("malayalam"))  //It is a palindrome 
console.log(isPalindrome("Car"))        //It is not a palindrome
```


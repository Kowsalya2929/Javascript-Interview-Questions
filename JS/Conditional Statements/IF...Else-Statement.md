### IF Statement Question with Answer

**1. Write a function that checks if a string is empty or not using if-else.**

```js
// Example 1
function str(s){
    let result = ''
    if(s === ""){
        result = "Input is Empty string"
    }else{
        result = "Input is not empty string"
    }
    return result;
}
console.log(str("Kowsalya"))
//Output: Input is not empty string

//Example 2
function str(s) {
    let result = '';

    if (typeof s !== "string" || s === undefined || !isNaN(s)) {
        result = "Invalid input";
    } else {
        if (s === "") {
            result = "Input is Empty string";
        } else {
            result = "Input is not empty string";
        }
    }

    return result;
}
console.log(str());             // Output: Invalid input
console.log(str(""));           // Output: Input is Empty string
console.log(str("Kowsalya"));   // Output: Input is not empty string
console.log(str(123));          // Output: Invalid input
```

**2. Create a program that checks if a number is even or odd using if-else.**

```js
//Example 1
let num = 4;
let result = ""

if(num > 0){
    result = "Positive"
}else{
    result = "Negative"
}
console.log(result)
//Output : Positive

//Example 2
let num ;
let result = ""

if(typeof num !== "number" || isNaN(num) || num === undefined){
    result = "Invalid input"
}else{
    if(num > 0){
        result = "Positive"
    }else{
        result = "Negative"
    }
}
console.log(result) //Output : Invalid input
```

**3. Use if-else to determine if a student passed (>=40) or failed.**

```js
//Example 1
let mark = 40;
let result ='';

if(mark >= 40){
    result = "Pass";
}else {
    result = "Fail";
}
console.log(result)
//Output : Pass

//Example 2
function gradeResult(mark) {
    if (typeof mark !== "number" ||
        Number.isNaN(mark) ||
        mark < 0 ||
        mark > 100) {
        return "Invalid input";
    }
    if (mark >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(gradeResult(40));    // Pass
console.log(gradeResult(18));    // Fail
console.log(gradeResult("40"));  // Invalid input
console.log(gradeResult(-5));    // Invalid input
console.log(gradeResult(NaN));   // Invalid input
```

**4. Check if a user entered password matches a stored password using if-else.**

```js
function checkPassword(inputPassword) {
    let storedPassword = "Secure@123";
    let result = "";

    if (typeof inputPassword !== "string" || inputPassword === "" || inputPassword === undefined) {
        result = "Invalid input";
    } else {
        if (inputPassword === storedPassword) {
            result = "Login successful";
        } else {
            result = "Incorrect password";
        }
    }

    return result;
}
console.log(checkPassword("Secure@123")); // Output: Login successful
console.log(checkPassword("wrongPass"));  // Output: Incorrect password
console.log(checkPassword(123));          // Output: Invalid input

```

**5. Create a program that checks if a number is even or odd using if-else.**

```js
function checkEvenOrOdd(num) {
    let result = "";

    if (typeof num !== "number" || isNaN(num)) {
        result = "Invalid input";
    } else {
        if (num % 2 === 0) {
            result = `${num} is Even`;
        } else {
            result = `${num} is Odd`;
        }
    }

    return result;
}
console.log(checkEvenOrOdd(10)); // Output: 10 is Even
console.log(checkEvenOrOdd(7));  // Output: 7 is Odd
console.log(checkEvenOrOdd("7")); // Output: Invalid input
```
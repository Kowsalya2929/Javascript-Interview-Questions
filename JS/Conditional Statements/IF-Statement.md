### IF Statement Question with Answer

1. Write an if-statement to verify whether a given string contains the word 'JavaScript'.

```js
//Example 1
let str = " Javascript ";

if(str.trim().toLowerCase() === "javascript"){
    console.log("Correct word")
}
if(str.trim() === ""){
    console.log("Please give value")
}
//Output : Correct word

//Example 2
let str = "It is Javascript programming"

if(str.toLowerCase().includes("javascript")){
    console.log("Correct word")
}
if(str.trim() === ""){
    console.log("Please give value")
}
//Output : Correct word
```

2. Write a program to check whether a character is a vowel using if.

```js
// Eample 1

let char = "I"

char = char.toLowerCase()

if(char === "a" || char === "e" || char === "i" || char === "o" || char=== "u"){
    console.log("Vowel")
}
//Output : Vowel

// Example 2

let char = "i"

if("aeiou".includes(char.toLowerCase())){
    console.log("Vowel")
}
//Output : Vowel
```

3. Write a JS program using an if statement to check if a number is positive.

```js
//Example 1
let num = 9;

if(num === 0){
    console.log(`${num} is Zero`)
}
if(num > 0){
    console.log(`${num} is Positive`)
}
if(num < 0>){
    console.log(`${num} is Negative`)
}
// Output : 9 is Positive

//Example 2
let num = "89";

if(typeof num !== "number" || isNaN(num)){
    console.log("Please give a number only")
}
if(num === 0){
    console.log(`${num} is Zero`)
}
if(num > 0){
    console.log(`${num} is Positive`)
}
if(num < 0){
    console.log(`${num} is Negative`)
}
//Output : Please give a number only

//Example 3
let num = "89";

num = Number(num)

if(num === 0){
    console.log(`${num} is Zero`)
}
if(num > 0){
    console.log(`${num} is Positive`)
}
if(num < 0){
    console.log(`${num} is Negative`)
}
//Output : 89 is Positive

//Example 4 
let num ;

if(num === "" || num === null || num === undefined){
    console.log("Input is empty or undefined")
    return;
}
if(typeof num !== "number" || isNaN(num)){
    console.log("Please give a number only")
    return;
}
if(num === 0){
    console.log(`${num} is Zero`)
    return;
}
if(num > 0){
    console.log(`${num} is Positive`)
    return;
}
if(num < 0){
    console.log(`${num} is Negative`)
    return;
}
//Output : Input is empty or undefined
```

4. Create a JS function that checks if a given year is a leap year using an if statement.


```js
function leapYear(year){
    let result;
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        result = "Leap Year"
    }
    if(!result){
        result = "Not Leap Year"
    }
    return result;
}

console.log(leapYear(2020))
//Output : Leap Year
```

5. Use if to check if a person is eligible to vote (age >= 18).

```js
let age = 18;

if(age >= 18){
    console.log("Eligible for vote")
}
if(age < 18){
    console.log("Not eligible for vote")
}
//Output : Eligible for vote
```
 
### Else IF Statement Question with Answer

**1. Use else-if to identify if a character is vowel, consonant or number**

```js
let char = "@";
let result = '';

if (typeof char !== "string" || char.length !== 1) {
    result = "Invalid input";
} else if (char >= '0' && char <= '9') {
    result = "Number";
} else if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    result = "Vowel";
} else if (char >= "a" && char <= "z") {
    result = "Consonant";
} else {
    result = "Invalid character";
}
console.log(result);
//Invalid Character
```

**2. Write a program that assigns a grade based on score using else-if.**

```js
let mark = 98;
let result ='';

if(typeof mark !== "number" || mark < 0 || mark > 100){
    result = "Invalid input";
}else if(mark === 0 || mark < 35){
    result = "Fail";
}else if(mark >= 80 && mark <= 100){
    result = "Grade A";
}else if(mark >= 60 && mark <= 79){
    result = "Grade B";
}else {
    result = "Grade C";
}

console.log(result)
//Output : Grade A
```

**3. Create a program to categorize age group: child, teen, adult, senior using else-if.**

```js
let age = 21;
let result = '';

if(typeof age !== "number" || age < 0 || age > 200){
    result = "Invalid input";
}else if(age > 0 && age <= 6 ){
    result = "child";
}else if(age >= 7 && age <= 19){
    result = "Teen";
}else {
    result = "Adult";
}

console.log(result)
// Output : Adult
```

**4. Determine the day of week using else-if given number 1-7**

```js
let day = 1;
let result = '';

if(typeof day !== "number" || day < 0 || day > 7){
    result = "Invalid day"
}else if(day === 1){
    result = "Sunday";
}else if(day === 2){
    result = "Monday";
}else if(day === 3){
    result = "Tuesday";
}else if(day === 4){
    result = "Wenesday";
}else if(day === 5){
    result = "Tursday";
}else if(day === 6){
    result = "Friday";
}else {
    result = "Staturday";
}

console.log(result) // Output : Sunday
```

**5. Create a calculator using else-if to perform +, -, *, / operations. Add input validation and error handling.**

```js
let operator = "+";

function calc(n1,n2,operator){
    let result = '';
    if(typeof operator !== "string" || !isNaN(operator)){
        result = "Invalid input";
    }else if(operator === "+"){
        result = n1 + n2;
    }else if(operator === "-"){
        result = n1 - n2;
    }
    else if(operator === "*"){
        result = n1 * n2;
    }
    else if(operator === "/"){
        result = n1 / n2;
    }else{
        result = "Other Operators"
    }
    return result;
}

console.log(calc(2,4,"%"))
// Output : Other Operators
```
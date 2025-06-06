### Switch Statement Question with Answer

**1. Create a switch case to print season name based on month number.**

```js
function calMonth(month){
    let result = '';
    if(typeof month !== "number"){
        result = "Invalid input"
    }else {
        switch(month){
            case 12:
            case 1:
            case 2:
                result = "Winter";
                break;
            case 3:
            case 4:
            case 5:
                result = "Spring";
                break;
            case 6:
            case 7:
            case 8:
                result = "Summer";
                break;
            case 9:
            case 10:
            case 11:
                result = "Autumn";
                break;
            default:
            result = "Invalid month number"
        }
    }
    return result;
}

console.log(calMonth(5)) //Output : Spring
```

**2. Develop a switch case to identify browser name from user input.**

```js
function browserDetect(browser){
    let result = '';
    if(typeof browser !== "string" || browser.trim() === ""){
        result = "Invalid input"
    }else{
        browser = browser.trim().toLowerCase()
        switch(browser){
            case "chrome":
                result = "Chrome detected";
                break;
            case "mozilla":
                result = "mozilla detected";
                break;
            case "safari":
                result = "safari detected";
                break;
            default:
            result = "Unknown browser";
        }
    }
    return result;
}

console.log(browserDetect("Chrome"))
//Output : Chrome detected
```

**3. Create a switch program to convert grade letter to remark (A = Excellent, etc). Add input validation and error handling**

```js
let grade = "A";
let remark = "";

if (typeof grade !== "string" || grade.trim() === "" || grade.length !== 1) {
    remark = "Invalid input. Please enter a single grade letter (A-F).";
} else {
    grade = grade.trim().toUpperCase();
    switch (grade) {
        case "A":
            remark = "Excellent";
            break;
        case "B":
            remark = "Very Good";
            break;
        case "C":
            remark = "Good";
            break;
        case "D":
            remark = "Needs Improvement";
            break;
        case "E":
            remark = "Poor";
            break;
        case "F":
            remark = "Fail";
            break;
        default:
            remark = "Invalid grade. Please enter a valid letter between A and F.";
    }
}
console.log(remark);
//Output : Excellent
```

**4. Use switch to assign fruit price based on input. Add input validation and error handling.**

```js
let fruit = "apple";
let price = "";

if (typeof fruit !== "string" || fruit.trim() === "") {
    price = "Invalid input. Please enter a fruit name.";
} else {
    fruit = fruit.trim().toLowerCase();

    switch (fruit) {
        case "apple":
            price = "₹150 per kg";
            break;
        case "banana":
            price = "₹50 per dozen";
            break;
        case "orange":
            price = "₹80 per kg";
            break;
        case "grape":
        case "grapes":
            price = "₹90 per kg";
            break;
        case "mango":
            price = "₹100 per kg";
            break;
        default:
            price = "Fruit not available or invalid entry.";
    }
}
console.log(price);
//Output : ₹150 per kg
```

**5. Write a program using switch to print day name based on day number. Add input validation and error handling**

```js
let dayNumber = 3; 
let result = "";

if (typeof dayNumber !== "number" || isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    result = "Invalid input. Please enter a number between 1 and 7.";
} else {
    switch (dayNumber) {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
        case 7:
            result = "Sunday";
            break;
        default:
            result = "Unknown day"; 
    }
}

console.log(result);
// Output : Monday
```
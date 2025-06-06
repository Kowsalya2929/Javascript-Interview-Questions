### IF Statement Question with Answer

**1. Create a function with a local variable and try accessing it outside.**

```js
function f1(){
    let msg = "Hai";
    console.log(msg) //Hai
}
f1()
console.log(msg) //Error: msg is not defined
```

**2. Write a program with global variable and a function that modifies it. Add input validation and error handling**

```js
let total = 0;

function addTotal(input){
    try{
        let num =Number(input)
        if(isNaN(num)){
            throw new Error("Please enter valid input")
        }
        total += num; //modifies the value
        console.log(total)
    }catch(err){
        console.log(err)
    }finally{
        console.log("finished")
    }
}

addTotal(9)
// Output : 9 finished
```

**3. Declare a global counter and increase it every time a function is called. Add input validation and error handling.**

```js
//Example 1
let count = "0";

function f1(){
    try{
        if(typeof count !== "number"){
            console.log("Invalid input")
            return;
        }
        count++;
        console.log(count)
    }catch(err){
        console.log(err)
    }
}

f1()
f1()
f1()
// Output :
// Invalid input
// Invalid input
// Invalid input

//Example 2
let count = 3;

function f1(){
    try{
        if(typeof count !== "number"){
            console.log("Invalid input")
            return;
        }
        count++;
        console.log(count)
    }catch(err){
        console.log(err)
    }
}

f1()
f1()
f1()
// Output :
// 4
// 5
// 6
```

**4. Use global and local variables to compute area of different shapes. Add input validation and error handling**

```js
let PI = 3.14; //PI is global variable

function areaCircle(radius){
    try{
        if(typeof radius !== "number" || radius <= 0){
            throw new Error("Invalid input")
        }
        let area = PI * radius * radius; // area is local variable
        console.log(area.toFixed(2))
    }catch(err){
        console.log(err)
    }
}
areaCircle(2)
//Output : 12.56
```
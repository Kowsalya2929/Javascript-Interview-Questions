# Functions in JavaScript

### Overview of Functions

1. **Basic Function Types:**
    - Function Declaration
    - Function Expression
    - Arrow Function
    - Anonymous Function

2. **Execution Types:**
    - IIFE (Immediately Invoked Function Expression)
    - Generator
    - Async

3. **Function Classification:**
    - First Class Function
    - First Order Function
    - Higher Order Function

4. **Functional Programming Types:**
    - Unary Function
    - Currying Function
    - Pure Function
    - Impure Function
    - Callback Function

5. **Object-Oriented & ES6:**
    - Constructor Function
    - Class Method
    - Static Method

6. **Functional Internals:**
    - Arguments Object
    - Rest Parameters
    - Default Parameters

7. **Closures & Scope:**
    - Closure

8. **`this` & Binding:**
    - `this` in Function
    - `call`, `apply`, `bind`

9. **Advanced Concepts:**
    - Function Composition
    - Debounce / Throttle


<ol>
<b><li>Bacic Functions Types.</li></b>
<ol>
<br>
<b><li>Function Declaration</li></b>
<ul>
<li>Defines a function with a name.</li>
<li>Also known as named function.</li>
<li>This function is hoisted, means you can call the function before it's declared in the code.</li>
</ul>

```js 
// Syntax
function functionName(parameters){
    //function body
}
```

```js
// Function Declaration
function greet(){
    console.log('kowsalya')
}
greet()   // Output: kowsalya
```

```js
// Function Declarations is Hoisting
greet()     // Output: kowsalya
function greet(){
    console.log('kowsalya')
}
```

```js
// Regular Function arguments is available
function showArguments(){
    console.log(arguments)
}
showArguments(1,2,3) // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }
```

```js
// Regular function : this depends on how the function is called
const obj = {
    name : "kowsalya",
    greet : function(){
        console.log(this.name)
    }
}
obj.greet() // Output: kowsalya
```


<br>
<b><li>Function Expression</li></b>
<ul>
<li>Assigned to a variable.</li>
<li>It can be anonymous (no name) or named.</li>
<li>It is not hoisted, means you can't call before it's declared</li>
</ul>

```js
// Syntax
const variableName = function(parameters){
    // function body
}
```

```js
// Function Expression // The function has no name means Anonymous function
const greet = function(){
    console.log('kowsalya')
}
greet()   // Output: kowsalya
```

```js
// Named Function Expression 
const greet = function sayHi(){
    console.log('kowsalya')
} 
greet()   // Output: kowsalya
sayHi()   // Output: undefined (only accessible inside itself)
```

```js
// Function Expression are not hoisted
greet()    // Output:- Error : cannot access 'greet' before initialization
const greet = function (){
    console.log('kowsalya')
}
```

```js
// Function Expression in callback
setTimeout(function(){
    console.log('kowsalya')
},1000)
```

<b><li>Arrow Function</li></b>
<ul>
<li>Shorter syntax.</li>
<li>No own (this, arguments, super).</li>
<li>Best use for callbacks</li>
</ul>

```js
// Syntax
const functionName = (parameters) => {
    // function body
}

// Shortest form
const functionName = (p1, p2) => p1 + p2;
```

```js
// Arrow Function Example
const greet1 = () => {
    console.log('kowsalya')
}
greet1()  // Output: kowsalya
```

```js
// One-linear return (Implicit Return)
const square = n => n * n ;
```

```js
//No Parameters
const greet2 = () => console.log('kowsalya') ;
```

```js
//With Parameters
const sum = (a,b) => a + b ;
```

```js
// Arrow function arguments is not available
const showArguments = () => {
  console.log(arguments);
}
showArguments(1, 2, 3)   // Output:- ReferenceError: arguments is not defined
```

```js
// Correct way to use arrow function in arguments with rest parameters
const showArguments = (...args) =>{
    console.log(args)
}
showArguments(1,2,3)    // Output: [ 1, 2, 3 ]
```

```js
// Arrow function : this is taken from outside (lexical scope)
const obj = {
    name : "kowsalya",
    greet : () => {
        console.log(this.name)
    }
}
obj.greet()  // Output: undefined
```

```js
// Arrow functions great for callbacks (map,filter,etc...)
const arr = [1,2,3,4]
const result = arr.map((n)=>{
    return n + 5
})
console.log(result)   // Output: [ 6, 7, 8, 9 ]
```

<b><li>Anonymous Function</li></b>
<ul>
<li>Defines function without a name.</li>
<li>No name needed, useful for private scope.</li>
<li>Short, Inline logic</li>
<li>No need for reuse</li>
<li>Keeps code clean for one-time use cases</li>
</ul>

<ol>
<h4>Common uses of Anonymous Function</h4>
<li>setTimeout / setInterval</li>
<li>Event Listeners</li>
<li>Array Methods (map,filter,forEach,etc...)</li>
<li>IIFEs (Immediately Invoked Function Expression)</li>
</ol>

```js

// Syntax - Assigned ti a variable (Function Expression)
const greet = function(){
    console.log("kowsalya")
}

// Syntax - Passed as a callback
setTimeout(function(){
    console.log("Delayed Hello")
},1000)

// Syntax - Immediately Invoked Function Expression
(function(){
    console.log("I run immediately")
})()

// Syntax - Arrow Function can also be anonymous
const greet = () =>{
    console.log("kowsalya")
}
```

```js
// Common uses of Anonymous Function :-

// 1. setTimeout / setInterval :

setTimeout(function(){
    console.log("Run after 1 second")
},1000)
setInterval(function(){
    console.log("Run after 2 second")
},2000)

// 2. Event Listeners :

document.getElementById("btn").addEvenetListener("click",function(){
    console.log("Button Clicked")
})

// 3. Array Methods (map,filter,forEach,etc...) :

const arr = [1,2,3]

const squared = arr.map((n)=>{
    return n * n;
})

const even = arr.filter((n)=>{
    return n%2 === 0;
})

arr.forEach((n)=>{
    console.log(n * n)
})

// 4. IIFEs (Immediately Invoked Function Expression) :

(function(){
    console.log("Run immediately")
})()
```
</ol>
<b><li>Execution Types:</li></b>
<br>
<ul>
<b><li>IIFE (Immediately Invoked Function Expression)</li></b>
<ul>
<li>In this IIFE function is immediately called.</li>
<li>Used to run code once and create a private scope.</li>
</ul>

```js
(function(){
    const message = "Secret"
    console.log(message)     // Output: Secret
})()
console.log(message)    // ReferenceError: message is not defined
```

<b><li>Generator</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Async</li></b>
<ul>
<li>async : Declares function that returns a promise.</li>
<li>await : Waits for a Promise to resolve.</li>
</ul>

```js
// Syntax 
async function functionName(){
    const result = await somePromise()
    return result;
}
```

</ul>
<b><li>Function Classification:</li></b>
<br>
<ul>
<b><li>First Class Function</li></b>
<ul>
<li>Functions are treated like values (assigned, returned, passed)</li>
</ul>

```js
// Example
function greet(){
    return "Hi"
}

// Assigned to a variable
const sayHi = greet;

// Passed as an argument
function executor(fn){
    return fn()         // Calling or returned
}
console.log(executor(sayHi))  // Output: Hi
```

<b><li>First Order Function</li></b>
<ul>
<li>First order function is regular function that</li>
<li>Doesn't take another function as input(argument).</li>
<li>Doesn't return a function also.</li>
</ul>

```js
// Example of First order function
function sum(a,b){
    return a + b;
}
console.log(sum(2,3))    // Output: 5
```

<b><li>Higher Order Function</li></b>
<ul>
<li>A function that takes(one or more) function or returns another function.</li>
</ul>

```js
// Returns a function
function higherOrder(fn){
    return function(x){
        return fn(x) * 2
    }
}
function square(n){
    return n * n
}
const doubleSquare = higherOrder(square)
console.log(doubleSquare(3))      // 18 → (3²) * 2
```

```js
// Takes a function as argument
function greet(name) {
  return `Hello, ${name}!`;
}
function processUser(fn, name) {
  return fn(name);
}
console.log(processUser(greet, "John")); // Hello, John!
```

</ul>
<li>Functional Programming Types:</li></b>
<br>
<ul>
<b><li>Unary Function</li></b>
<ul>
<li>Takes exactly one argument</li>
</ul>

```js
// Unary function
const square = (a) => a * a ;

```

<b><li>Currying Function</li></b>
<ul>
<li>multiple arguments into a series of unary function.</li>
</ul>

```js
// Currying function
function sum(a){
    return function(b){
        return a + b;
    }
}
console.log(sum(1)(1))  // Output: 2
```

<b><li>Pure Function</li></b>
<ul>
<li>Same output for same input, No side effects.</li>
<li>Does not produce side effects (like modifying global variables, logging, DOM updates, API calls, etc.)</li>
</ul>

```js
// Pure function
function sum(a,b){
    return  a+b;
}
```

<b><li>Impure Function</li></b>
<ul>
<li>Depends on external state.</li>
<li>Produce side effects (like modifying global variables, logging, DOM updates, API calls, etc.)</li>
</ul>

```js
// Depends on external variable
let count = 0;
function impureIncrement() {
  count++; // modifies an external variable
}
console.log(impureIncrement())  // Output: undefined
```

```js
// Logging is a side effect
function logMessage(message) {
  console.log(message); // side effect: logs to console
}
console.log(logMessage("test message"))  
// test message
// undefined (because it isn't return)
```

<b><li>Callback Function</li></b>
<ul>
<li>A function passed as an argument to another function.</li>
</ul>

```js
// Callback function
function sayHi(name,callback){
    callback(name)
}
function greet(name){
    console.log(`Hi!, ${name}`)
}
sayHi("kowsalya",greet) // Output: Hi!, kowsalya
```

</ul>
<b><li>Object-Oriented & ES6:</li></b>
<br>
<ul>
<b><li>Constructor Function</li></b>
<ul>
<li>A constructor function is a regular function used to create and initialize objects.</li>
<li>It is javascript object oriented features (pre ES6)</li>
</ul>

```js
// Constructor function with new
function person(name){
    this.name = name;
}
const person1 = new person("kowsalya")
console.log(person1)     // Output: person { name: 'kowsalya' }
console.log(person1.name)    // Output: kowsalya
```

```js
// Constructor function without new
function person(name){
    this.name = name;
}
const person1 = person("kowsi")
console.log(person1)     // Output:- undefined
console.log(person1.name)   // Output:- TypeError: Cannot read property 'name' of undefined
console.log(global.name)  // Output: kowsi
```

<b><li>Class Method</li></b>
<ul>
<li>A class method is just a function inside a class</li>
<li>We can run on object created from class</li>
</ul>

```js
// Class method
class Car {
    drive(){
        console.log("Driving...")
    }
}
const myCar = new Car()
myCar.drive()     // Output: Driving...
```

## 1. **Static Method**

Static methods are defined on the class, not the instance.

* Used for utility functions.
* Cannot access `this` unless it's also static.
* Called using `ClassName.method()`.

```js
class MathHelper {
  static square(x) {
    return x * x;
  }
}

console.log(MathHelper.square(5)); // 25
```

---

## 2. **Functional Internals**

### a. **Arguments Object**

* Available inside all non-arrow functions.
* An array-like object holding all passed arguments.
* Not available in arrow functions.

```js
function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3); // [1, 2, 3]
```

### b. **Rest Parameters**

* Packs all remaining arguments into an array.
* Preferred over `arguments`.
* Works in arrow functions too.

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
```

### c. **Default Parameters**

* Allows default values for parameters.
* Used when no argument is passed.
* Simplifies fallback logic.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Hello, Guest
```

---

## 3. **Closures & Scope**

### a. **Closure**

* A function remembers variables from its lexical scope.
* Used for data privacy.
* Powerful for factory functions.

```js
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 4. **this & Binding**

### a. **this in Function**

* Refers to the calling context.
* `this` in regular functions depends on how it's called.
* Arrow functions don’t have their own `this`.

```js
function show() {
  console.log(this);
}

const obj = { show };
obj.show(); // refers to obj
```

### b. **call, apply, bind**

* `call`: invokes function with `this` + comma args.
* `apply`: like `call` but with array args.
* `bind`: returns new function with bound `this`.

```js
function greet(place) {
  console.log(`Hello ${this.name} from ${place}`);
}

const user = { name: "Alice" };

greet.call(user, "India");   // Hello Alice from India
greet.apply(user, ["USA"]);  // Hello Alice from USA
const bound = greet.bind(user);
bound("UK");                 // Hello Alice from UK
```

---

## 5. **Advanced Concepts**

### a. **Function Composition**

* Combine small functions into bigger ones.
* Output of one becomes input of next.
* Helps with cleaner pipelines.

```js
const add = x => x + 2;
const double = x => x * 2;

const composed = x => double(add(x));

console.log(composed(5)); // 14
```

### b. **Debounce / Throttle**

**Debounce**: Run function only after delay with no repeats.
**Throttle**: Run function at regular intervals.

```js
// Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle
function throttle(fn, limit) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;
      setTimeout(() => (waiting = false), limit);
    }
  };
}
```


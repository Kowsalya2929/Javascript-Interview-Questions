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
<br>
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
<br>
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
<br>
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
<br>
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
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
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
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<b><li>Function Classification:</li></b>
<br>
<ul>
<b><li>First Class Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>First Order Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Higher Order Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<li>Functional Programming Types:</li></b>
<br>
<ul>
<b><li>Unary Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Currying Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Pure Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Impure Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Callback Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<b><li>Object-Oriented & ES6:</li></b>
<br>
<ul>
<b><li>Constructor Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Class Method</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Static Method</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<b><li>Functional Internals:</li></b>
<br>
<ul>
<b><li>Arguments Object</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Rest Parameters</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Default Parameters</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<b><li>Closures & Scope:</li></b>
<br>
<ul>
<b><li>Closure</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<b><li>this & Binding:</li></b>
<br>
<ul>
<b><li>this in Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>call, apply, bind</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
<b><li>Advanced Concepts</li></b>
<br>
<ul>
<b><li>Function Composition</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<b><li>Debounce / Throttle</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
```

</ul>
</ol>

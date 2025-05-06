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
<li></li>
<li></li>
<li></li>
</ul>

```js
```

<li>Anonymous Function</li></b>
<br>
<ul>
<li></li>
<li></li>
<li></li>
</ul>

```js
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

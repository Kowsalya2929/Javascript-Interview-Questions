### FALSY AND TRUTHY

- Falsy values -> false ,0 ,-0 ,null ,undefined ,NaN ,"" ,0n(BigInt).

```js
if(false){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(0){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(-0){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(null){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(undefined){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(NaN){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(""){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

```js
if(0n){
    console.log("HI")
}else {
    console.log("BYE")  //BYE
}
```

- Truthy values -> " ",[],{},function(){},"hello",3,-3,Infinity,-Infinity. Others Everything also truthy values.

- All Objects are truthy values but not null, null is a falsy value.

```js
if(" "){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if({}){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if([]){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if(function(){}){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if("heloo"){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if(9){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if(-7){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if(Infinity){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

```js
if(-Infinity){
    console.log("HI")  //HI
}else {
    console.log("BYE")  
}
```

- Objects are [], {} , function(){}, new Boolean(), new String(), new Number(), new Date(), new Map(), new Set(), null, Math, JSON.

- Note : When comparing two objects are always false. But not null,math,JSON.


```js
console.log([] == [])            // false
console.log([] == {})            //Comparing two objects are always false  //false
console.log([] === [])           // false
console.log({} == {})            // false
console.log({} === {})           // false
console.log(function(){} == function(){})  // false
console.log(function(){} === function(){}) // false
console.log(function(){} == [])            // Comparing two objects are always false //false
console.log(function(){} === [])           // false
console.log(new Boolean() == new Boolean())     // false 
console.log(new Boolean() === new Boolean())    // false 
console.log(new String() == new String())       // false 
console.log(new String() === new String())      // false 
console.log(new Number() == new Number())       // false
console.log(new Number() === new Number())      // false 
console.log(new Date() == new Date())           // false 
console.log(new Date() === new Date())           // false
console.log(new Map() == new Map())             // false 
console.log(new Map() === new Map())             // false 
console.log(new Set() == new Set())             // false 
console.log(new Set() === new Set())             // false 
console.log(null == null)        // true
console.log(null === null)       // true
console.log(Math == Math)        // true 
console.log(Math == Math)        // true 
console.log(JSON == JSON)        // true 
console.log(JSON == JSON)        // true 
```

- Values of Falsy value and truthy values

```js
console.log(Number(0))            //0
console.log(Number(-0))           //-0
console.log(Number(null))         //0
console.log(Number(undefined))    //NaN
console.log(Number(NaN))          //NaN
console.log(Number(false))        //0
console.log(Number(""))           //0
console.log(Number(" "))          //0
console.log(Number(0n))           //0
console.log(Number([]))           //0
console.log(Number({}))           //NaN
console.log(Number(function(){})) //NaN
console.log(Number("hello"))      //NaN
console.log(Number("5"))          //5
console.log(Number(5))            //5
console.log(Number(-5))           //-5
```

- OR(||) Operator always return first truthy value.

```js
let name = "" || "Guest";
console.log(name) //Guest
```

```js
let name = true || "Continue";
console.log(name) //true
```

- AND(&&) Operator always return first falsy value.

```js
let name = "" && "Guest";
console.log(name) //"" or NO OUTOUT
```

```js
let name = true && "Continue";
console.log(name) //Continue
```

- Note : shorcut Double Not (!!)

```js
console.log(!!0)       //false
console.log(!!"heloo") //true
console.log(!![])      //true
console.log(!!{})      //true
console.log([] == false) //true  //Explanation : Empty Object value is 0 ([]= 0). false value is 0. (==) only check value right. 
```
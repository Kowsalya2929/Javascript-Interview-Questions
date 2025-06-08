### Boolean Data type :

- Boolean dat type gives only two values are (true or false).

```js
console.log(Boolean(10 > 9))      //true
console.log(10 > 9)               //true
console.log(Boolean(100))         //true
console.log(Boolean(15))          //true
console.log(Boolean(-15))         //true
console.log(Boolean(7.3))         //true
console.log(Boolean(-7.3))        //true
console.log(Boolean("kowsalya"))  //true
console.log(Boolean("false"))     //true
console.log(Boolean("true"))      //true
console.log(Boolean(7 + 1 + 3.14))//true
console.log(Boolean({}))          //true
console.log(Boolean([]))          //true
console.log(Boolean(true))        //true
console.log(Boolean(false))       //false
console.log(Boolean(0))           //false
console.log(Boolean(-0))          //false
console.log(Boolean(""))          //false
let x ;
console.log(Boolean(x))           //false
console.log(Boolean(null))        //false
let y = undefined;
console.log(Boolean(y))           //false
let z = 10 / "kowsalya"
console.log(Boolean(z))           //false
```


- JavaScript Booleans are Object:

```js
let x = false
console.log(Boolean(x))      //false
console.log(typeof x)        //Boolean
let y = new Boolean(false)   
console.log(y)               //[Boolean: false]
console.log(typeof y)        //object
```

1. (==) Only check values
2. (===) check values and data type
3. Boolean == Object => true
4. Boolean === Object => false
5. Boolean == Boolean => true
6. Boolean === Boolean => true
7. Object == Object => false
8. Object === Object => false

- Note : Comparing two JavaScript objects always return false.

```js
let x = false;
let y = new Boolean(false);
console.log(x == y)    //true
```

```js
let x = false;
let y = new Boolean(false);
console.log(x === y)    //false
```

```js
let x = false;
let y = false;
console.log(x == y)    //true
```

```js
let x = false;
let y = false;
console.log(x === y)    //true
```

```js
let x = new Boolean(false);
let y = new Boolean(false);
console.log(x == y)    //false
```

```js
let x = new Boolean(false);
let y = new Boolean(false);
console.log(x === y)    //false
```

- toString() : Converts Boolean as a string.

```js
let x = Boolean(false)
console.log(x.toString())  //false
console.log(typeof x)      //boolean
let y = x.toString()
console.log(typeof y)      //string
```

- valueOf() : Returns the value.

```js
let x = Boolean(false)
console.log(x.valueOf())   //false
let y = false
console.log(y.valueOf())   //false
```

- prototype : Returns the function that created the Boolean prototype. 

```js
let bool = false;
let text = bool.constructor;
console.log(bool)  //false
console.log(text)  //[Function: Boolean]
```

- prototype allows you to add new properties and methods to booleans.

```js
Boolean.prototype.myColor = function() {
  if (this.valueOf() == true) {
    return "green";
  } else {
    return "red";
  }
};
let a = true;
console.log(a.myColor()) //true
```

- Note : You should not change the prototype of built in JavaScript datatypes like:

1. Numbers
2. Strings
3. Arrays
4. Dates
5. Booleans
6. Function
7. Objects

- Only change the prototype of your own objects.

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", "blue");
const myMother = new Person("Sally", "Rally", "green");

Person.prototype.nationality = "English";

console.log(myFather.nationality) //English
console.log(myMother.nationality) //English
```

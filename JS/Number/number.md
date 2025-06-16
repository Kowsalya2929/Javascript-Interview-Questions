### Number with Questions and Answers

- Javascript has only one type of number. It is with decimal and without decimal.

```js
let x = 3.14 // with decimal
let y = 3 // without decimal
```

- Two ways to create a number:

```js
let x = 5
console.log(typeof x) //Number
let y = new Number(5)
console.log(typeof y) //Object
```

- Exponent Notation:

```js
let x = 123e5 // 12300000
let y = 123e-5 // 0.00123
```

- How to Add a Numbers with Strings (+) Operator:

1. Numbers are added; 10 + 10 = 20.
2. Strings are concated; "10" + "10" = 1010.
3. Number + String = String; 10 + "10" = 1010.
4. String + Number = String; "10" + 10 = 1010.  
5. Number + Number + String; 10 + 10 + "10" = 2010.
6. String + Number + Number; "10" + 10 + 10 = 101010.

```js
//Example 1
let x = 10;
let y = 20;
console.log("The result is : " + x + y) //The result is : 1020
x = "10";
console.log(x + y) // 1020
x = 10;
z = "30";
console.log(x + y + z) //3030
```

- Convert string to number : All numeric operators - , + , * , / , **, % , not use (+) operator.

```js
console.log("10" + 10)   //1010
console.log("10" + "10") //1010
console.log("10" - 10)   //0
console.log("10" - "10") //0
console.log("10" * 10)   //100
console.log("10" * "10") //100
console.log("10" / 10)   //1
console.log("10" / "10") //1
console.log("10" ** 2)   //100
console.log("10" ** "2") //100
console.log("10" % 10)   //0(remainder)
console.log("10" % "10") //0(remainder)
```

- Not a Number(NaN): 

1. NaN + Number = NaN; NaN + 10 = NaN.
2. NaN + String = String; NaN + "10" = NaN10.
3. isNaN() => check not a number.
4. typeof NaN => Number.

```js
console.log(100 / "Apple") //NaN
console.log(NaN + 5 )      //NaN
console.log(NaN + "5")     //NaN5
console.log(NaN - 5)       //NaN
console.log(NaN - "5")     //NaN
console.log(NaN * 5)       //NaN
console.log(NaN * "5")     //NaN
console.log(NaN / 5)       //NaN
console.log(NaN / "5")     //NaN
console.log(NaN % 5)       //NaN
console.log(NaN % "5")     //NaN
console.log(isNaN(5))      //false
console.log(isNaN("5"))    //false
console.log(isNaN("kowsalya")) //true
```

- null means no value but asigned.

1. null takes value 0.
2. null = 0, [] = 0, "" = 0, false = 0, true = 1.
3. null + Number = Number; null + 5 = 5.
4. null + String = String; null + "5" = null5.
5. typeof null => Object.

```js
console.log(null + 5 )      //5
console.log(null + "5")     //null5
console.log(null - 5)       //-5
console.log(null - "5")     //-5
console.log(null * 5)       //0
console.log(null * "5")     //0
console.log(null / 5)       //0
console.log(null / "5")     //0
console.log(null % 5)       //0
console.log(null % "5")     //0
```

- Infinity : Anything divisible by zero, 2 / 0 = infinity.

1. typeof infinity => Number.

```js
console.log( 2 / 0)  //infinity
console.log( -2 / 0) //-infinity
console.log(typeof infinity) //number
```

## methods in number:

- toString() method (base 2 to 36): convert various data types intto string.

```js
let x = 32;
console.log(x.toString(2))  //binary (base 2)         //"1000000"
console.log(x.toString(8))  //octal (base 8)          //"40"
console.log(x.toString(10)) //decimal (base 10)       //"32" (default number)
console.log(x.toString(12)) //duodecimal (base 12)    //"28"
console.log(x.toString(16)) //hexadecimal (base 16)   //"20"
console.log(x.toString(32)) //duotrigesimal (base 32) //"10"
console.log(x.toString(36)) //Hexadecimal (base 36)   //"W"
console.log(x.toString())   //"32" (just convert a string)
```

```js
let num = 123;
let strNum = num.toString(); //"123"

let bool = true;
let strBool = bool.toString(); // strBool is "true"

let arr = [1, 2, 3];
let strArr = arr.toString(); // strArr is "1,2,3"

let obj = {name: "John", age: 30};
let strObj = obj.toString(); // strObj is "[object Object]"
```

- toExponential() method :  It return as a string.

```js
let x = 9.656
console.log(x.toExponential())    //9.656e+0
console.log(x.toExponential(2))    //9.66e+0
console.log(x.toExponential(4))    //9.6560e+0
console.log(x.toExponential(6))    //9.656000e+0
console.log(x.toExponential(0))    //1e+1
```

- toFixed() method : return as a string.

```js
let x = 9.656
console.log(x.toFixed())    //10
console.log(x.toFixed(2))    //10
console.log(x.toFixed(4))    //9.66
console.log(x.toFixed(6))    //9.6560
console.log(x.toFixed(0))    //9.656000
```

- toPrecision() method : return as a string.

```js
let x = 9.656
console.log(x.toPrecision())    //9.656
console.log(x.toPrecision(2))    //9
console.log(x.toPrecision(4))    //9.656
console.log(x.toPrecision(6))    //9.65600
console.log(x.toPrecision(0))    //error
```

- valueOf() method : return  as a number.

```js
let x = 123;
consoel.log(x.valueOf())        //123
consoel.log((123).valueOf())    //123
consoel.log((100+23).valueOf()) //123
```

- Number() : Convert variables to numbers.

```js
console.log(Number(true))       //1
console.log(Number(false))      //0
console.log(Number("10"))       //10
console.log(Number(" 10"))      //10
console.log(Number("10 "))      //10
console.log(Number("10.33"))    //10.33
console.log(Number("10,33"))    //NaN
console.log(Number("10 33"))    //NaN
console.log(Number("kowsalya")) //NaN
console.log(Number(new Date("1970-01-02"))) // 86400000 => milli seconds from 1970-01-01. Convert date to number.
```

- parseInt() method :

1. parse a string return a whole number.
2. spaces are allowed.
3. only the first numnber is returned.
4. convert string to numbers.

```js
console.log(parseInt("-10"))        //-10
console.log(parseInt("-10.33"))     //-10
console.log(parseInt("10"))         //10
console.log(parseInt("10.33"))      //10
console.log(parseInt("10 6"))       //10
console.log(parseInt("10 years"))   //10
console.log(parseInt("years 10"))   //NaN
```

- parseFloat() method :

1. parse a string return a number.
2. spaces are allowed.
3. only first number is returned.
4. convert string to number.

```js
console.log(parseFloat("-10"))        //-10
console.log(parseFloat("-10.33"))     //-10.33
console.log(parseFloat("10"))         //10
console.log(parseFloat("10.33"))      //10.33
console.log(parseFloat("10 6"))       //10
console.log(parseFloat("10 years"))   //10
console.log(parseFloat("years 10"))   //NaN
```

- Number object methods : both will return true or false only.

1. isInteger() 
2. isSafeInteger() : Safe integer are all integers from (-(2<sup>53</sup>- 1) to  +(2<sup>53</sup>- 1)). Like This is safe integers : (0 to 9007199254740991) and not safe (9007199254740992)


```js
//wrong way : Don't use
let x = 32;
console.log(x.isInteger()) //TypeError

//Correct code
Number.isInteger(11) //true
Number.isInteger(10.5)  //false

//Safe integer
Number.isSafeInteger(10) //true
Number.isSafeInteger(9007199254740992) //false
```

- Number Properties

1. Epsilon => 1, -1
2. MAX_VALUE => largest number
3. MIN_VALUE => smallest number
4. MAX_SAFE_INTEGER => (2<sup>53</sup> -1)
5. MIN_SAFE_INTEGER => -(2<sup>53</sup> -1)
6. NaN => Not a Number
7. POSITIVE_INFINITY => + &infin;
8. NEGATIVE_INFINITY => - &infin;


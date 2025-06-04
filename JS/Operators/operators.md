### Operators in Javascript

1. **Arithmetic Operator:**
2. **Assignment Operator:**
3. **Comparison Operator:**
4. **String Operator:**
5. **Logical Operator:**
6. **Bitwise Operator:**
7. **Ternary Operator:**
8. **Type Operator:**

**Arithmetic Operator:**

1. **Addition(+):**

```js
let x = 10;
let y = 20;
let z = x + y;
console.log(z) //30
```
2. **Subtraction(-):**

```js
let x = 10;
let y = 20;
let z = x - y;
console.log(z) //10
```

3. **Multiplication(*):**

```js
let x = 10;
let y = 20;
let z = x * y;
console.log(z) //200
```

4. **Division(/):**

```js
let x = 40;
let y = 20;
let z = x / y;
console.log(z) //2
```

5. **Modulus(Remainder)(%):**

```js
let x = 20;
let y = 10;
let z = x % y; 
console.log(z) //0
```

6. **Exponentiation:**

```js
let x = 2;
let z = x ** 2;
console.log(z) //4
```

7. **Increment(++):**

```js
//Post Increment

let x = 2;
console.log(x++) //2
console.log(x)   //3

//Pre Increment

let y = 2;
console.log(++y) //3
console.log(y)   //3
```

8. **Decrement Operator(--):**

```js
//Post Decrement

let x = 2;
console.log(x--) //2
console.log(x)   //1

//Pre Decrement

let y = 2;
console.log(--y) //1
console.log(y)   //1
```

**Assignment Operator:**

1. **Addtion Assignment Operator(+=):**

```js
let x = 5;
x += 10;
console.log(x) //15
```

2. **Subtraction Assignment Operator(-=):**

```js
let x = 5;
x -= 2;
console.log(x) //3
```

3. **Multiplication Assignment Operator(*=):**

```js
let x = 10;
x *= 5;
console.log(x) //50
```

4. **Division Assignment Operator(/=):**

```js
let x = 10;
x /= 5;
console.log(x) //2
```

5. **Remainder Assignment Operator(%=):**

```js
let x = 10;
x %= 5;
console.log(x) //0
```

6. **Exponentiation Assignment Operator:**

```js
let x = 3;
x **= 2;
console.log(x) //9
```

**Comparison Operator:**

- Comparision or Logical are used to test the true or false.
- Comparision operator has number and alphabetically. "2" > "12" is true in alphabetically.

1. **Equal to(==):** 

- It's only compare the values.

```js
let x = 3;
console.log(x == 4)        //false
console.log(x == 3)        //true
console.log(x == "3")      //true
console.log(x == "kowsi")  //false
```

2. **Triple Equal to(===):**

- It's compare value and data type.

```js
let x = 2;
console.log(x === 2) //true
console.log(x === "2") //false
```

3. **Not Equal to(!=):** 

```js 
let x = 2;
console.log(x != 4) //true
console.log(x != 2) //false
console.log(x != "2") //false
console.log(x != "4") //true
```

4. **Not Triple Equal to(!==):**

```js
let x = 2;
console.log(x !== 3) //true
console.log(x !== 2) //false
console.log(x !== "2") //true
console.log(x !== "3") //true
```

5. **Less than or equal to (<=):**

```js
let x = 2;
console.log(x <= 2) //true
console.log(x <= 0) //false
```

6. **Less than (<):**

```js
let x = 2;
console.log(x < 3) //true
console.log(x < 0) //false
```

7. **Greater than or equal to(>=):**

```js
let x = 2;
console.log(x >= 3) //false
console.log(x >= 2) //true
```

8. **Greater than (>):**

```js
let x = 2;
console.log(x > 1) //true
console.log(x > 2) //false
```

**String Comparision operator:**

- "A" < "B" , "12" < "2" , 2 < "12" is true in alphabetically.

```js
//Note
console.log("A" > "B") //false
console.log("A" < "B") //ture
console.log("A" <= "B") //ture
console.log("A" >= "B") //false
console.log("A" == "B") //false
console.log("A" === "B") //false
console.log("A" != "B") //ture
console.log("A" !== "B") //true
console.log("2" < "12") //false
console.log("2" > "12") //true
console.log("2" > 2) //false
console.log("2" >= 2) //ture
```

**Logical Operator:**

1. **Logical AND(&&):**

```js
let a = 5;
let b = 6;
if(a <= 5 && b > 3){
    console.log("ok")  //ok
}else {
    console.log("not ok")
}
```

2. **Logical OR(||):**

```js
let a = 5;
let b = 6;
if(a <= 5 || b > 7){
    console.log("ok") //ok
}else {
    console.log("not ok")
}
```

3. **Logical NOT(!):**

```js
let a = 5;
if(a != 6) {
    console.log("ture") //ture
}else {
    console.log("false")
}
```

**Bitwise Operator:**

1. **Bitwise AND(&):**

```js
let a = 3;  //0011
let b = 4;  //0100
console.log(a&b) //0000 => 0
```

2. **Bitwise OR(|):**

```js
let a = 3;  //0011
let b = 4;  //0100
console.log(a|b) //0111 => 7
```

3. **Bitwise XOR(^):**

```js
let a = 3;  //0011
let b = 4;  //0100
console.log(a^b) //0111 => 7
```

4. **Bitwise NOT(~):** 

- Formula :- ~n = -(n + 1)

```js
let a = 8;
console.log(~a) //~8 = -(8 + 1) => -9
let b = -6;
console.log(~b) 
//~(-6) = -((-6)+1)
        //-( -6 +1) 
        //-(-5)
        //5 output
```

5. **Bitwise Left Shift Operator(<<):**

- Formula :- (n << 3) = n * 2 ^ 3 , (n << 6) = n * 2 ^ 6

```js
let a = 4;
console.log(a << 6) 
// (4 << 6) = 4 * 2 ^ 6 
         // = 4 * (2*2*2*2*2*2)
         // = 4 * 64
         // = 256
```

6. **Bitwise Right Shift Operator(>>):** 

- Formula :- (n >> 3) = n / 2 ^ 3 , (n >> 2) = n / 2 ^ 2

```js
let a = 6;
console.log(a >> 4)
console.log(a >> 2)
console.log(a >> 1)
// (6 >> 4) = 6 / 2 ^ 4
         // = 6 / (2*2*2*2)
         // = 6 / 16
         // = 0
// (6 >> 2) = 6 / 2 ^ 2
         // = 6 / (2*2)
         // = 6 / 4
         // = 1
// (6 >> 1) = 6 / 2 ^ 1
         // = 6 / (2*1)
         // = 3
```

**Ternary Operator(?:):**

```js
let a = 10;
console.log( a === 10 ? "OK" : "NOT OK" )
```

**Type Operator:**

```js
typeof "John"          // Returns "string"
typeof ("John"+"Doe")  // Returns "string"
typeof 3.14            // Returns "number"
typeof (33 + 66)       // Returns "number"
typeof NaN             // Returns "number"
typeof 1234n           // Returns "bigint"
typeof true            // Returns "boolean"
typeof false           // Returns "boolean"
typeof {name:'John'}   // Returns "object"
typeof [1,2,3,4]       // Returns "object"
typeof {}              // Returns "object"
typeof []              // Returns "object"
typeof new Object()    // Returns "object"
typeof new Array()     // Returns "object"
typeof new Date()      // Returns "object"
typeof new Set()       // Returns "object"
typeof new Map()       // Returns "object"
typeof function () {}  // Returns "function"
typeof x               // Returns "undefined"
typeof null            // Returns "object"
```

```js
//Difference Between Undefined and Null

typeof undefined      // undefined
typeof null           // object

null === undefined    // false
null == undefined     // true
```
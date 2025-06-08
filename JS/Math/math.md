### Math Javascript with Questions and Answers

1. Math.PI : Getting pi value.

```js
console.log(Math.PI) //3.141592653589793
```

2. Math.round() : Rounded to its nearest integer.

```js
console.log(Math.round(10.2))    //10
console.log(Math.round(10.5))    //11
console.log(Math.round(10.9))    //11
console.log(Math.round(-10.2))   //-10
console.log(Math.round(-10.5))   //-10
console.log(Math.round(-10.9))   //-11
```

3. Math.pow() :-

```js
console.log(Math.pow(8,2))   //64
console.log(Math.pow(2,2))   //4
console.log(Math.pow(2,1))   //2
console.log(Math.pow(3,2))   //9
```

4. Math.sign() : Gives only (-1,0,1).

```js
console.log(Math.sign(-4))  //-1
console.log(Math.sign(0))   //0
console.log(Math.sign(4))   //1
```

5. Math.sqrt() : 

```js
console.log(Math.sqrt(64))   //8
console.log(Math.sqrt(5))   //2.23606797749979
```

6. Math.abs() : Gives only positive value

```js
console.log(Math.abs(-10.7))  //10.7
console.log(Math.abs(10.7))   //10.7
console.log(Math.abs(-5.1))   //5.1
console.log(Math.abs(-8.2))   //8.2
console.log(Math.abs(-10))    //10
```

7. Math.floor() : Rounded down to its nearest integer.

```js
console.log(Math.floor(10.3))   //10
console.log(Math.floor(10.5))   //10
console.log(Math.floor(10.9))   //10
console.log(Math.floor(-10.3))   //-11
console.log(Math.floor(-10.5))   //-11
console.log(Math.floor(-10.9))   //-11
```

8. Math.ceil() : Rounded up to its nearest integer.

```js
console.log(Math.ceil(10.3))   //11
console.log(Math.ceil(10.5))   //11
console.log(Math.ceil(10.9))   //11
console.log(Math.ceil(-10.3))   //-10
console.log(Math.ceil(-10.5))   //-10
console.log(Math.ceil(-10.9))   //-10
```

9. Math.trunc() : Returns the part of integer.

```js
console.log(Math.trunc(10.3))   //10
console.log(Math.trunc(10.5))   //10
console.log(Math.trunc(10.9))   //10
console.log(Math.trunc(-10.3))   //-10
console.log(Math.trunc(-10.5))   //-10
console.log(Math.trunc(-10.9))   //-10
```

10. Math.min() : Takes minimum integer.

```js
console.log(Math.min(1,0,-1)) //-1
```

11. Math.max() : Takes maximum integer.

```js
console.log(Math.max(1,0,-1)) //1
```

12. Math.random() : Gives any integer between (0 to 1).

```js
console.log(Math.random())                    // (0 to 1) //random output : 0.28822238738668227
console.log(Math.floor(Math.random()* 10))    // (0 to 9)
console.log(Math.floor(Math.random()* 11))    // (0 to 10)
console.log(Math.floor(Math.random()* 10)+1)  // (0 to 10)
```

14. Math.E and Math.log() are twins.
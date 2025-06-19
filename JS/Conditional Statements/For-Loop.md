### For Loop Questions with Answers

**1. Print all prime numbers between 1 and 100.**

- Prime Numbers : eg: 2,3,5,7,11,13,17,19...
- It is greater than 1.
- It is only divisible by 1 and itself.


```js
for(let i = 2; i <= 100; i++){
    let isPrime = true;
    for(let j=2;j< i;j++){
        if(i % j == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i)
    }
}
```

**2.  Find the factorial of a number**

- 5! = 5 * 4 * 3 * 2 * 1.

```js
function factorialNum(n){
    let result = 1;
    for(let i = 2; i <= n ; i++){
        result *= i
    }
    return result;
}

console.log(factorialNum(6)) //720
```

**2.  Generate the first 15 Fibonacci numbers**

- 1,1,2,3,5,..

```js
let a = 0, b = 1;

console.log(a)
console.log(b)

for(let i = 2;i <= 15;i++){
    let next = a + b;
    console.log(next)
    a = b;
    b = next;
}

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144
// 233
// 377
// 610
```
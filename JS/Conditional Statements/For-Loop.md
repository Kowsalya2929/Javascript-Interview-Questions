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
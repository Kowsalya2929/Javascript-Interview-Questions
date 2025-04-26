function fibonacciSeries(n){
    let first = 0;
    let second = 1;
    let series = []
    for(let i = 0; i < n; i++){
        series.push(first)
        let next = first + second;
        first = second;
        second = next;
    }
    return series;
}

console.log(fibonacciSeries(10))

//fibonacci series : 0,1,1,2,3,5,8,12,...

//Explanation

// 1. Variables:

// first = 0, second = 1 → Initial values of the Fibonacci sequence.

// series = [] → Will store the sequence.

// 2. Loop:

// for (let i = 0; i < n; i++) → Loop n times to generate n numbers.

// 3. Inside the loop:

// series.push(first) → Adds the current number to the array.

// let next = first + second → Calculates the next number.

// first = second, second = next → Update the values for the next iteration.

// 4. Result:

// After the loop ends, you return the full sequence in the series array.
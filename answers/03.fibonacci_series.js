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
function checkNumber(n){
    if(n === 0)
        return "Number is zero"
    if(n < 0)
        return "Number is Positive"
    if(n > 0)
        return "Number is negative"
    return "Not number datatype"
}

console.log(checkNumber("0"))   
console.log(checkNumber(0))     
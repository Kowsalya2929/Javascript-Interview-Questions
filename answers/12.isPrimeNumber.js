// prime number is not diviable by any number
// 1 and negative number is not a prime

function checkPrime(n) {
    if (n < 2) {
        return "Number is not prime";
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Number is not prime";
        }
    }

    return "Number is prime";
}

console.log(checkPrime(-23)); // Output: "Number is not prime"

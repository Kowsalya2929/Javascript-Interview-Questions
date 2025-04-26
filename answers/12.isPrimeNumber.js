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


// Explanation:

// Prime number:
// A number greater than 1 that is only divisible by 1 and itself.

// First check:
// If n < 2 ( 0, 1, or negative numbers), immediately return "Number is not prime".

// Then:
// Use a for loop to check from i = 2 up to √n (square root of n):

// If n is divisible by any i, then it’s not a prime number.

// If no divisibility is found, it is a prime number.

// Finally:

// Return "Number is prime".

// Example for checkPrime(-23):

// -23 < 2, so it immediately returns "Number is not prime".

// Example for checkPrime(7):

// 7 > 2.

// Check divisibility from 2 to √7 (approximately 2.64).

// 7 is not divisible by 2 or 3.

// Therefore, 7 is prime → returns "Number is prime".
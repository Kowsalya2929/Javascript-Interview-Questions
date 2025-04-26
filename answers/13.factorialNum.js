function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers"
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(`factorial num is ${factorial(3)}`);



//explanation

// The function factorial(n) uses recursion.

//1.step => First check:

// If n < 0, return "Factorial is not defined for negative numbers".

//2.step => Base case:

// If n === 0 or n === 1, return 1.

//2.step => Recursive case:

// Otherwise, return n * factorial(n-1).

// When you call factorial(0):

// n = 0

// The base case (n === 0 || n === 1) matches.

// So, it immediately returns 1.

// When you call factorial(3):

// factorial(3) → 3 × factorial(2)

// factorial(2) → 2 × factorial(1)

// factorial(1) → returns 1

// Then it multiplies:

// factorial(2) → 2 × 1 = 2

// factorial(3) → 3 × 2 = 6
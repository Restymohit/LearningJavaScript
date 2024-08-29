// factorial.js

// Function to calculate the factorial of a number
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const num = 5;
console.log(`The factorial of ${num} is: ${factorial(num)}`);

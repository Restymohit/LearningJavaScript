// checkEvenOdd.js

// Function to check if a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}

// Example usage
const number = 7;
console.log(checkEvenOdd(number));

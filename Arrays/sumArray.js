// sumArray.js

// Function to calculate the sum of all elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(`The sum of the array elements is: ${sumArray(numbers)}`);

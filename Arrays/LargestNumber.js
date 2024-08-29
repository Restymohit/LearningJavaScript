// largestNumber.js

// Function to find the largest number in an array
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Example usage
const numbers = [3, 5, 7, 2, 8, 10, 1];
console.log(`The largest number in the array is: ${findLargestNumber(numbers)}`);

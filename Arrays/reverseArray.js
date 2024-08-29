// reverseArray.js

// Function to reverse the elements of an array
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log(`The reversed array is: ${reverseArray(arr)}`);

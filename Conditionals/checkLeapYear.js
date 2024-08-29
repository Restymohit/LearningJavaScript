// checkLeapYear.js

// Function to check if a year is a leap year
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example usage
const year = 2024;
console.log(checkLeapYear(year));

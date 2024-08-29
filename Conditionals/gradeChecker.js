// gradeChecker.js

// Function to determine the grade based on marks
function gradeChecker(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Example usage
const marks = 85;
console.log(`The grade for marks ${marks} is: ${gradeChecker(marks)}`);

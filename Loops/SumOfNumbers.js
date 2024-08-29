function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const n = 10;
console.log(`The sum of numbers from 1 to ${n} is: ${sumOfNumbers(n)}`);

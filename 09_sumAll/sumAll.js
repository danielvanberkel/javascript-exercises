const sumAll = function(num1, num2) {
    // Check if a number
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    } 

    // Check if non-negative
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

     // Check if integer
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    
    // Get integer range between the 2 numbers, starting from smallest number to largest number
    const smallest = Math.min(num1, num2);
    const largest = Math.max(num1, num2);
    let numbers = [];

    for (let i = smallest; i <= largest; i++) {
        numbers.push(i);
    }

    const sum = numbers.reduce((prev, curr) => prev + curr);
    return sum
};

// Do not edit below this line
module.exports = sumAll;

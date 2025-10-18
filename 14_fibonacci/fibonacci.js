const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;

    const intNum = Number(num);

    if (intNum < 0) {
        return "OOPS"
    }

    if (intNum === num1) {
        return num1
    }

    if (intNum === num2) {
        return num2
    }

    for(let i = 1; i < intNum; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
  
  return sum
};

// Do not edit below this line
module.exports = fibonacci;

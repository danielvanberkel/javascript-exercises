const reverseString = function(str) {
    const chars = str.split('');
    chars.reverse();
    const reversed = chars.join("")
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (str) {
    const lowerWithoutWhitespacesAndPunct = str.replace(/[\W_]/gi, '').toLowerCase();
    const reversed = lowerWithoutWhitespacesAndPunct.split("").reverse().join("");
    return reversed === lowerWithoutWhitespacesAndPunct
};

// Do not edit below this line
module.exports = palindromes;

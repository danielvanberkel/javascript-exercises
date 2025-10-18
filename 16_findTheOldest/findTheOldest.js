const findTheOldest = function(objArray) {
    let currYear = new Date().getFullYear()
    const sorted = objArray.sort((a, b) => ((b.yearOfDeath ?? currYear) - b.yearOfBirth) - ((a.yearOfDeath ?? currYear) - a.yearOfBirth))
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;

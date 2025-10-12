const convertToCelsius = function(fahrenheit) {        
  const converted = ((fahrenheit - 32) * (5/9));
  return Math.round(converted * 1e1) / 1e1;
};

const convertToFahrenheit = function(celsius) {
  const converted = celsius * (9/5) + 32;
  return Math.round(converted * 1e1) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

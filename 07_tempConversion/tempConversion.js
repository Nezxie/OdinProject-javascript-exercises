const ftoc = function(temperature) {
  //[°C] = ([°F] - 32) * (5/9))
  temperature=(temperature-32)*(5/9);
  return +temperature.toFixed(1);
};

const ctof = function(temperature) {
  //[°F] = [°C] * (9/5)) + 32 
  temperature=temperature*(9/5)+ 32;
  return +temperature.toFixed(1);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

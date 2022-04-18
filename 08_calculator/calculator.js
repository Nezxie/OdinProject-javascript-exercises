const add = function(num1,num2) {
  if(typeof(num1)=='number'&&typeof(num2)=='number'){
	  return num1+num2;
  }
  return "ERROR";
};

const subtract = function(num1,num2) {
  if(typeof(num1)=='number' && typeof(num2)=='number'){
	  return num1-num2;
  }
  return "ERROR";
};

const sum = function(nums) {
  let sum=0;
  for(elem of nums){
      sum+=elem;
    }

  return sum;

};

const multiply = function(nums) {
  let multi=1;
  for(elem of nums){
      multi*=elem;
  }
  return multi;
}
const power = function(num1,num2) {
	if(typeof(num1)=='number'&&typeof(num2)=='number'){
	  return Math.pow(num1,num2);
  }
  return "ERROR";
};

const factorial = function(num1) {
	if(typeof(num1)=='number'){
    let result=1;
    for(let i=1;i<=num1;i++){
      result*=i;
    }
	  return result
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const sumAll = function(startValue,stopValue) {
let sum=0;
if(typeof(startValue)!=number||typeof(stopValue)!=number){
    return "ERROR";
}

if(startValue>stopValue){
    let tmp=startValue;
    startValue=stopValue;
    stopValue=tmp;
}

for(let i=startValue;i<=stopValue;i++){
    sum+=i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;

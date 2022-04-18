const getTheTitles = function(inputArr) {
    outputArr=[];
    for(let i=0;i<inputArr.length;i++){
        outputArr.push(inputArr[i]['title']);
    }
    return outputArr;
};

// Do not edit below this line
module.exports = getTheTitles;

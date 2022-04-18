const reverseString = function(string) {
    let outputString="";
    string=string.split("");
    for(let i=string.length-1;i>=0;i--){
        outputString+=string[i];
    }
    return outputString;
};
// Do not edit below this line
module.exports = reverseString;

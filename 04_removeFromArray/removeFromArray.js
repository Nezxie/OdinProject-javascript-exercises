const removeFromArray = function(array,...valuesToDelete) {
let index=-1;
 for(element of valuesToDelete){
     index=array.indexOf(element); //returns -1 if element is not in array
     if(index!=-1){
        array.splice(index,1); 
     }
 }
 return array;
};

// Do not edit below this line
module.exports = removeFromArray;

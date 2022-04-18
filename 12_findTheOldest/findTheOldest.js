const findTheOldest = function(people) {
    let max=-10;
    let result;
    let age=0;
    for(let i=0;i<people.length;i++){
        if(!(['yearOfDeath'] in people[i])){
            let currentDate=new Date();
            let currentYear=currentDate.getFullYear();
            age=currentYear-people[i].yearOfBirth;

        }
        else{
        age=people[i].yearOfDeath-people[i].yearOfBirth;
        }
        if (age>max){
            max=age;
            result = people[i];   
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;

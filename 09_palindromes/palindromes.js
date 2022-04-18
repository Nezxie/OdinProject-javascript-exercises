const palindromes = function (phrase) {
    let invalidChars=['.',',',' ','?','!'];
    for(notLetter of invalidChars){
        phrase=phrase.replaceAll(notLetter,"");
    }
    phrase=phrase.toLowerCase();
    console.log(phrase);
    for(let i=0;i<phrase.length;i++){
        if(phrase[i]!=phrase[(phrase.length-1)-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

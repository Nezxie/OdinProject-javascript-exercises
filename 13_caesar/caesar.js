const caesar = function(toCode,step) {
    let asci=0;
    let coded="";
    for(char of toCode){
        asci=char.charCodeAt(0);

        if(asci>64 && asci<91){
            asci+=step;
            if(step<0){
                while(asci<64){
                    asci+=26;
                }
            }
            else{
                while(asci>89){
                    asci-=26;
                }
            }
        }
        if(asci>96 && asci<123){
            asci+=step;
            if(step<0){
                while(asci<96){
                    asci+=26;
                }
            }
            else{
                while(asci>121){
                    asci-=26;
                }
            }
        }
        coded+=String.fromCharCode(asci);  
    }
    return coded;
};

// Do not edit below this line
module.exports = caesar;

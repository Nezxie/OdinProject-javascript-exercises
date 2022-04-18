const fibonacci = function(n) {
    if(typeof n =='string'){
        n=parseInt(n);
    }
    if(n<0){
        return "OOPS";
    }

    let result=0;
    let f0=0;
    let f1=1;

    if(n==0){return f0;}
    if(n==1){return f1;}
    for(let i=2;i<=n;i++){
        result=f1+f0;
        f0=f1;
        f1=result;
    }
    return f1;
}
// Do not edit below this line
module.exports = fibonacci;

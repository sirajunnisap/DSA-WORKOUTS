function powtwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
   
    return true
}

console.log(powtwo(2));
console.log(powtwo(10));
console.log(powtwo(4));

//big-o= o(logn)

function powerofTwoBitwise(n){


    if(n<1){
        return false
    }
    return (n & (n-1)) === 0
    
}

console.log(powerofTwoBitwise(2));
console.log(powerofTwoBitwise(5));
console.log(powerofTwoBitwise(4));

//big-o = o(1)




function power2(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true
}
console.log(power2(4));
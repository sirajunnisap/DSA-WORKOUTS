function isPrime(n){

    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i === 0){
            return false
        }
    }
    
    return true

}

console.log(isPrime(1));//false
console.log(isPrime(5));//true
console.log(isPrime(4));//false

//big-o = o(n)


function prime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i === 0) {
            return false
        }
    }return true
}

console.log(prime(35));
console.log(prime(5));


function prime(n){
    if(n<2){
        return false
    }
    for(let i = 2;i<n ; i++){
        if(n%i === 0){
            return false 
        }
    }
    return true
}

console.log(prime(4));
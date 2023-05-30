function recursiveFactorial(n){
      
    if(n=== 0){
        return 1
    }
    return n*recursiveFactorial(n-1)

}

console.log(recursiveFactorial(2));//2
console.log(recursiveFactorial(4));//24

//big-o = o(n)

//5!  = 5*4*3*2*1       5=4!
//4!  = 4*3*2*1         4=3!
//3!  = 3*2*1           3=2!
//2!  = 2*1             2=1!
//1!  = 1*1             1=0!
//0!  = 1



function recurFactorial(n){

    if(n===0){
        return 1
    }
    return n*recurFactorial(n-1)
}
console.log(recurFactorial(5));


function factorial(n){
    let result = 1
    for(let i=2;i<=n;i++){
        result *=  i
    }
    return result
}
console.log(factorial(5));



function fact(n){
    let result =1
    for(let i=2;i<n;i++){
        result *= i
    }
    return result
}

console.log(fact(7));


function factrec(n){
   if(n===0){
    return 1
   }
   return n*factrec(n-1)
}

console.log(factrec(5));

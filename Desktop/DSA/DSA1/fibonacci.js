function fibonacci(n){
     let a = [0,1]
     
    for(let i=0;i<n-2;i++){
       a[i+2] = a[i]+a[i+1]
    }
   return a
}
console.log(fibonacci(2));//[0,1]
console.log(fibonacci(3));//[0,1,1]
console.log(fibonacci(7));//[0,1,1,2,3,5,8]


function fibonacci2(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci2(2));//[0,1]
console.log(fibonacci2(3));//[0,1,1]
console.log(fibonacci2(7));//[0,1,1,2,3,5,8]

// Big - o = o(n)
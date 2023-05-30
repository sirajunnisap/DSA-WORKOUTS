// function recursiveFibnocci(n){

//     if(n<2){
//         return n
//     }
//     return recursiveFibnocci(n-1)+recursiveFibnocci(n-2)
// }


// console.log(recursiveFibnocci(2));//1
// console.log(recursiveFibnocci(4));//3
// console.log(recursiveFibnocci(5));//8


// Fn = Fn-1 + Fn-2
// Fn = 0 and F1 =1

// f2 = f1 = f0
// f2 = 1 + 0
// f2 = 1

function fibno(n){
    if(n<2){
        return n
    }
    return fibno(n-1)+fibno(n-2)
}

console.log(fibno(8));
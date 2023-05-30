function result(arr,target){
    const resultarr = []

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(target === arr[i]+arr[j]){
                resultarr.push(arr[i])
                resultarr.push(arr[j])
               
            }
        }
    }
    return resultarr ;
}
console.log(result([5,3,6,4,9],10));//[6,4]

//o(n2) time 
//o(1) space



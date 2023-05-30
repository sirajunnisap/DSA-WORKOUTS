let array = [1,2,3,4,2,3,5]
resultarr = []

for(let i= 0;i<array.length;i++){
    flag = false
    for(let j=i+1;j<array.length;j++){
        if(array[i] === array [j]){
            flag = true;
            break;
        }
    }
    if(!flag){
        resultarr .push(array[i])
    }
}
console.log(resultarr);


let arr = [ 1,2,3,4,6]
let result = []



    for(let i = 0 ;i<arr.length ; i++){
        flag = false
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                flag = true
                break;
            }
           
        }
        if(!flag){
            result.push(arr[i])
        }
        
    }
    



console.log(result);
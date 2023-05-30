function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
       
    }return -1
}

console.log(linearSearch([-5,6,7,4,23,5],4));//3
console.log(linearSearch([-5,6,7,4,23,5],5));//5
console.log(linearSearch([-5,6,7,4,23,5],10));//-1

//big-o = o(n)

function findtarget (arr,target){
     
    for(let i = 0;i<arr.length;i++){
        if(arr[i]== target){
            return i
        }
    }return -1
}
console.log(findtarget([12,23,45,53],23));


function linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }

    }return -1
}
 console.log(linear([1,2,3,4,5,6,8],8));
 console.log(linear([1,2,3,4,5,6,8],7));
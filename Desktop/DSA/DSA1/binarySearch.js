function binarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex-1
        }else{
            leftIndex = middleIndex+1
        }
    }
    return -1
}

console.log(binarySearch([3,4,5,6,7],7));//3
console.log(binarySearch([3,4,5,6,7],9));//-1
console.log(binarySearch([3,4,5,6,7],4));//0

//big-o = o(logn)



function bnrySrch(arr,target){
    arr.sort() //sort the array
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(target == arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex] ){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
    

}

console.log(bnrySrch([10,30,20,50,25],30));//3
console.log(bnrySrch([10,30,20,50,25],25));//2
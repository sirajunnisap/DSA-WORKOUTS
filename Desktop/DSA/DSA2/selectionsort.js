//selection sort
function selectionsorting(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i){
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    console.log("sorted array",arr);
}
let arr=[23,43,45,65,67,12]
selectionsorting(arr)




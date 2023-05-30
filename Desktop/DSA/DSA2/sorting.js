// /Bubble sort
function bubbleSorting(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1.length - i - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
          [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
        }
      }
    }
    console.log("Sorted by bubble sort:", arr1);
  }
  
  let arr1 = [33, 2, 255, 6, 7, 88, 4, 32, 6, 33, 2];
  bubbleSorting(arr1);



  //insertion sort
  function insertionSort(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      let curr = arr2[i];
      let j = i - 1;
      while (j >= 0 && arr2[j] > curr) {
        arr2[j + 1] = arr2[j];
        j--;
      }
      arr2[j + 1] = curr;
    }
    console.log("insertion sort:", arr2);
  }
  
  let arr2 = [100, 2, 44, 5, 3, 21, 1, 16, 7, 2];
  insertionSort(arr2);


  //merge sort
  function mergeSort(array) {
    if (array.length < 2) 
    return array;
    
    else{
      const mid = Math.floor(array.length/2)
      const leftArray = array.slice(0,mid)
      const rightArray = array.slice(mid)
      return  merge(mergeSort(leftArray),mergeSort(rightArray)) 
    }  
  


  function merge(leftArray,rightArray){
    let sortedArray = []
    while(leftArray.length &&rightArray.length){
      if(leftArray[0]<=rightArray[0]){
        sortedArray.push(leftArray.shift())
      }else{
        sortedArray.push(rightArray.shift())
      }
    }
  return  [...sortedArray, ...leftArray, ...rightArray ]
  }
}
  let array=[28,3,45,1,65,74,2,8]

console.log(mergeSort(array));


//quick sort
// code evolution
// function quicksort(array){
//     if (array.length <= 1) {
//       return array;
//     }
  
//     let pivotValue = array[array.length -1]
//     let left =[]
//     let right =[]
  
//     for(let i=0;i<array.length-1;i++){
//       if(array[i]<pivotValue){
//         left.push(array[i])
//       }else{
//         right.push(array[i])  
//       }
//     }
//     return [...quicksort(left),pivotValue, ...quicksort(right)]
    
//   }
//   let array=[82,68,10,15,9,1,2,25]

//   console.log(quicksort(array));
  
  // pivot value from back
  function quicksort(array1){
    if (array1.length <= 1) {
      return array1;
    }
  
    let pivotValue = array1[0]; // Change pivot to first element
    let left =[];
    let right =[];
  
    for(let i=1; i<array1.length; i++){ // Start loop from second element
      if(array1[i]<pivotValue){
        left.push(array1[i])
      }else{
        right.push(array1[i])  
      }
    }
  
    return [...quicksort(left), pivotValue, ...quicksort(right)]
  }

  let array1=[82,68,10,15,9,1,2,25]

  console.log(quicksort(array1));



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


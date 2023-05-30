// // /Bubble sort
// function bubbleSorting(arr1) {
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr1.length - i - 1; j++) {
//         if (arr1[j] > arr1[j + 1]) {
//           [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
//         }
//       }
//     }
//     console.log("Sorted by bubble sort:", arr1);
//   }
  
//   let arr1 = [33, 2, 255, 6, 7, 88, 4, 32, 6, 33, 2];
//   bubbleSorting(arr1);





//   let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };



// function bubbleSort(arr) {
//     var len = arr.length;
//     var swapped;
  
//     for (var i = 0; i < len - 1; i++) {
//       swapped = false;
//       for (var j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap elements
//           var temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//           swapped = true;
//         }
//       }
  
//       if (!swapped) {
//         // If no swaps were made in this pass, the array is already sorted
//         break;
//       }
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   var array = [5, 3, 8, 2, 1, 4];
//   console.log("Before sorting:", array);
//   var sortedArray = bubbleSort(array);
//   console.log("After sorting:", sortedArray);




  function bubble(array){
    let length = array.length
    let swap 
    
    for(let i = 0;i<length - 1 ; i++){
        swap = false
        for(let j=0;j<length - 1 -i ; j++){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                swap  = true
            }
        }
        if(!swap){
            break;
        }
    }
    return array
  }

  
  console.log(bubble([6,4,2,5,1,8,9]));
  
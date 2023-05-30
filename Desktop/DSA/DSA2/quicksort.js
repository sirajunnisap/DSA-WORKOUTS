


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
  function quicksort(array){
    if (array.length <= 1) {
      return array;
    }
  
    let pivotValue = array[0]; // Change pivot to first element
    let left =[];
    let right =[];
  
    for(let i=1; i<array.length; i++){ // Start loop from second element
      if(array[i]<pivotValue){
        left.push(array[i])
      }else{
        right.push(array[i])  
      }
    }
  
    return [...quicksort(left), pivotValue, ...quicksort(right)]
  }

  let array=[82,68,10,15,9,1,2,25]

  console.log(quicksort(array));

  // function quicksort(array) {
//     if (array.length<2) {
//       return null
//     }
//     let leftarray=[]
//     let rightarray=[]
//     let pivot = array[0]
//     for (let i = 1; i < array.length; i++) {
//          if (array[i]<pivot) {
//           leftarray.push(array[i])
//          }else{
//           rightarray.push(array[i])
//          }
      
//     }
//     return [ ...quicksort(leftarray),pivot,...quicksort(rightarray)]
//   }
//   console.log(quicksort([9,8,7,6,5,4,3,2,1]));


function quicksortsampla(array){
    if(array<=1){
        return array
    }

    let pivot = array[0]
    let leftarray = []
    let rightarray = []

    for(let i=1;i<array.length;i++){
        if(array[i]<pivot){
            leftarray.push(array[i])
        }else{
            rightarray.push(array[i])
        }
    }

    return [ ...quicksortsampla(leftarray),pivot,...quicksortsampla(rightarray)]
}

console.log(quicksortsampla([10,60,40,20,80,30]));
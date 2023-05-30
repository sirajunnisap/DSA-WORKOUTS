let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.length);

let middleIndex = Math.floor(arr.length / 2);
let middleValue = arr[middleIndex];
arr.splice(middleIndex,1)

console.log(middleValue);
console.log(arr);

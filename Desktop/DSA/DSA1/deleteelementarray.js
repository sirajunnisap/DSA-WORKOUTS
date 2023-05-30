//remove first element

let array = [1,2,3,4,5,6]

for(let i = 0 ; i<array.length-1; i++){
    array[i] = array[i+1]
}
array.length = array.length-1
console.log(array);


//remove last element

let array2 = [1,2,3,4,5,6]

array2.length = array2.length-1
console.log(array2);


// remove a element in a specific position 

let array3 = [1,2,3,4,5,6,7]

let removepos = 4

for(let i=removepos-1;i<array3.length;i++){
    array3[i] = array3[i+1]
}

array3.length = array3.length-1

console.log(array3);
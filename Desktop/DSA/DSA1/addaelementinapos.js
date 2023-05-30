
//add element in a specific position 

let array = [12,34,56,67,89]

let pos = 3
let newelement = 30
for(let i = array.length-1; i>=pos-1 ; i--){
    array[i+1] = array[i]
}

array[pos-1] = newelement

for(let i = 0;i<array.length;i++){
    console.log(array[i]);
}


// add a value forst last position 

let newvalue = 78

for(let i = array.length-1;i>=0;i--){
     array[i+1] = array[i]

}

array [0] = newvalue

console.log(array);


array[array.length-1] = newvalue
console.log(array);

























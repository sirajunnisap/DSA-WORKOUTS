// toString() converts an array to a string of (comma separated) array values.
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//Banana,Orange,Apple,Mango

//join() method also joins all array elements into a string.

// pop() method removes the last element from an array:
//push() method adds a new element to an array (at the end):

//shift() method removes the first array element and "shifts" all other elements to a lower index.
// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

//delete fruits[0];

//concat() method creates a new array by merging (concatenating) existing arrays:const myChildren = arr1.concat(arr2, arr3);

//splice() method can be used to add new items to an array:
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.

//The slice() method slices out a piece of an array into a new array.

// forEach() method calls a function (a callback function) once for each array element.




//map() method creates a new array by performing a function on each array element.
//filter() method creates a new array with array elements that pass a test.example creates a new array from elements with a value larger than 18:
//reduce() method runs a function on each array element to produce (reduce it to) a single value.

let arr = [10,20,11,23,45]

let maparr = arr.map((x)=> x*2)
console.log(maparr);

let filtarr = arr.filter((x)=> x%2 == 0)
console.log(filtarr);

let reducearr = arr.reduce((acc,crr)=>{
    if(crr>acc)
    crr = acc
    
    return crr;
})
console.log(reducearr);

let array = [ 
    {name:"sirajunnisa",place:"manjeri"},
    {name:"samaha",place:"malappuram"},
    {name:"vivek",place:"malappuram"}
]
let result = array.filter((item)=>{

    return item.place === "malappuram"
}).map((item)=>{
    return item.name
})

console.log(result);

let copy = array.map((item)=>{
    return item.name
})
console.log(copy);

//mergearray and sort

let array1 = [1,2,3,4]
let array2 = [6,7,8,9]

let mergearray = array1.length+array2.length




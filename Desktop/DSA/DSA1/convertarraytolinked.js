class Node {
    constructor(value){
        this.value = value
        this.next = null
    }

}

function convert(array){
    if(!array || array.length === 0){
        return null
    }
    let head = new Node(array[0])
    let temp = head
    for(let i=1;i<array.length;i++){
        temp.next =new Node(array[i])
        temp = temp.next
    }
    return head
}

 let convertedlinked = convert([1,2,3])
 console.log(convertedlinked);













 

 class Node1{
    constructor(value){
        this.value = value
        this.next = null
    }
 }
 function converttolinked (arr){
    if(!arr || arr.length == 0){
        return null
    }
    let head =new Node1(arr[0])
        let temp = head
    for(let i = 1 ; i<arr.length;i++){
        temp.next = new Node1(arr[i])
        temp = temp.next
    }
    return head
 }
 console.log(converttolinked([1,2,3]));


 class Node2{
    constructor(value){
        this.value = value
        this.next = null
    }
 }

 function array(array){
    let head = new Node2(array[0])
    let temp = head
    for(let i = 1;i<array.length;i++){
        temp.next = new Node2(array[i])
        temp = temp.next
    }
    return head
 }

 console.log(array([1,2,3]));



// function bubble(array){
//     let length = array.length
//     let swapped
//     for(let i=0 ;  i<length-1;i++){
//         swapped = false
//         for(let j=0;j<length-i-1;j++){
//             if(array[j]>array[j+1]){
//                 let temp = array[j]
//                 array[j]=array[j+1]
//                 array[j+1]=temp
//                 swapped = true
//             }
//         }
//         if(!swapped){
//             break;
//         }
        
//     }
//     return array
// }

// console.log(bubble([1,4,7,3,8,9]));




// function bubblesorting(array){
//     let length = array.length
//     let swapped 

//     for(let i = 0;i<length-1; i++){
//         swapped = false
//         for(let j = 0;j<length-i-1;j++){
//             if(array[j]>array[j+1]){

//                 let temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp
//                 swapped = true
//             }
//         }
//         if(!swapped){
//             break;
//         }

//     }
//     return array
// }

// console.log(bubblesorting([4,2,3,1,7,6]));



// function insertion(array){
    
//     let length = array.length

//     for(let i=1;i<length;i++){

//         let key = array[i]
//         let j= i-1

//         while(j>=0 && array[j]>key){
//           array[j+1]=array[j]  
//           j--
//         }
//         array[j+1] = key
//     }
//     return array
// }

// console.log(insertion([8,3,1,5,6,2]));


// function insertion(array){

//     let length = array.length

//     for(let i =1;i<length;i++){

//         let key = array[i]
//         let j = i-1

//         while(j>=0&&array[j]>key){
//             array[j+1] = array[j]
//             j--
//         }
//         array[j+1] = key
//     }
//     return array
// }

// console.log(insertion([4,3,2,5,6,1]));



// function selection(array){
//     let length = array.length
//     for(let i=0;i<length-1;i++){
//       let min = i
//       for(let j=i+1;j<length;j++){
//         if(array[j]<array[min]){
//             min=j
//         }
//       }
      
//         let temp = array[i]
//         array[i] = array[min]
//         array[min] = temp
      

//     }
//     return array
    
// }

// console.log(selection([4,3,2,6,1,8]));

// function selection(array){
//     let length = array.length
//     for(let i = 0;i<length-1;i++){
//         let min = i
//         for(let j = i+1; j<length ; j++){
//             if(array[j]<array[min]){
//                 min = j
//             }

//         }
        
//         let temp = array[i]
//         array[i] = array[min]
//         array[min] = temp
//     }
//     return array
// }

// console.log(selection([8,5,3,7,6,2,1]));


// function quick(array){

//     if(array.length<=1){
//         return array
//     }

//     let pivot = array[0]
//     let left = []
//     let right = []

//     for(let i=1;i<array.length;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return [ ...quick(left),pivot,...quick(right)]
// }

// function quick(array){
//      if(array.length <=1){
//         return array
//      }

//      let pivot = array[0]
//      let left = []
//      let right = []

//      for(let i =1;i<array.length;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//      }
//      return quick(left).concat(pivot,quick(right))
// }


// console.log(quick([8,5,3,9,2,1]));

// console.log(quick([4,3,2,1,6,7,8]));


// function  quick(array){
//     if(array.length <=1){
//         return array
//     }

//     let pivot = array[0]
//     let leftarray = []
//     let rightarray = []
//     for(let i=1;i<array.length;i++){
//         if(array[i]<pivot){
//             leftarray.push(array[i])
//         }else{
//             rightarray.push(array[i])
//         }
//     }
//     return quick(leftarray).concat(pivot,quick(rightarray))
// }

// console.log(quick([6,5,7,4,8,2]));



// function mergesort(array){

//     if(array.length<=1){
//         return array
//     }
//     let mid = Math.floor(array.length/2)
//         let left = array.slice(0,mid)
//         let right = array.slice(mid)
//         return merge(mergesort(left),mergesort(right)) 
// }
    
// function merge(leftarray,rightarray){
    
//         let sortedarray = []
    
//         while(leftarray.length&&rightarray.length){
//             if(leftarray[0]<=rightarray[0]){
//                 sortedarray.push(leftarray.shift())
//             }else{
//                 sortedarray.push(rightarray.shift())
//             }
//         }
//         return [...sortedarray,...leftarray,...rightarray]
//     }



// console.log(mergesort([4,3,2,6,7,1]));


function mergesort(array){
    
    if(array.length<=1){
                return array
            }

    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    return merge(mergesort(left),mergesort(right))
}

function merge(leftarray,rightarray){

    let sortedarray  = []
    while(leftarray.length&&rightarray.length){
        if(leftarray[0]<=rightarray[0]){
            sortedarray.push(leftarray.shift())
        }else{
            sortedarray.push(rightarray.shift())
        }
    }
    return [...sortedarray,...leftarray,...rightarray]
}


console.log(mergesort([7,4,2,3,1,9]));
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class stack{
//     constructor(){
//         this.top = null
//     }
//     push(element){
//         const node = new Node(element)
//         if(!this.top){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top  = node
//         }
//     }
//     pop(){
//         if(!this.top){
//             return null;
//         }else{
//             this.top = this.top.next
//         }
//     }
//     print(){
//         let temp = this.top
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const stacklist = new stack()

// stacklist.push(50)
// stacklist.push(40)
// stacklist.push(30)
// stacklist.push(20)
// stacklist.push(10)
// stacklist.pop()

// stacklist.print()

// class stack{
//     constructor(size){
//         this.array = Array (size)
//         this.top = -1
//     }
//     push(element){

//         this.top++
//         this.array[this.top] = element
//     }
//     pop(){
//         if(this.top == -1){
//             return null
//         }
//         this.top--
//     }
//     peek(){
//         return this.array[this.top]
//     }
//     size(){
//         return this.top+1
//     }
//     display(){
//         if(this.top == -1){
//             console.log("stack is empty");
//         }else{
//             for(let i = 0;i<=this.top;i++){
//               console.log(this.array[i]);  
//             }
//         }
//     }
// }

// const stacklist = new stack(50)

// stacklist.push(50)
// stacklist.push(20)
// stacklist.push(40)
// stacklist.push(10)
// stacklist.push(60)
// stacklist.pop()
// stacklist.display()

// console.log(stacklist.peek());
// console.log(stacklist.size());


// class queue{
//     constructor(size){
//         this.array = Array(size)
//         this.front = -1
//         this.rear = -1
//     }
//     enqueue(element){
//         if(this.rear == -1){
//             this.front = 0
//             this.rear = 0
//             this.array[0]=element
//             return
//         }
//         this.rear++
//         this.array[this.rear] = element

//     }
//     dequeue(){
//         if (this.front == -1) {
//                 return null
//             }
//             if (this.front == this.rear) {
//                 this.front = -1
//                 this.rear = -1
//             }
//             this.front++
//    }
//     display(){
//         if(this.front == -1&& this.rear == -1){
//             console.log("queue is empty");
//         }else{
//             for(let i = this.front ; i<=this.rear ; i++){
//                 console.log(this.array[i]);
//             }
//         }
//     }
// }

// const queuelist = new queue(50)

// queuelist.enqueue(40)

// queuelist.enqueue(20)

// queuelist.enqueue(30)

// queuelist.enqueue(10)

// queuelist.dequeue()

// queuelist.display()



// class StackwithQeueu{
//     constructor(){
//       this.stack1=[]
//       this.stack2=[]
//     }
//     enqueue(element){
//       this.stack1.push(element)
//     }
//     dequeue(){
//         if (this.stack1.length ===0 && this.stack2.length===0) {
//           return null
//         }
//         if (this.stack2.length==0) {
//           while (this.stack1.length>0) {
//                  this.stack2.push(this.stack1.pop())
//                  console.log(this.stack2);
//           }
//         }
       
//         return this.stack2.pop()
//       }
//     display(){
//         if(this.stack1.length==0&&this.stack2.length==0){
//           return null
//         }else{
//           for (let i = 0; i < this.stack2.length; i++) {
//                 console.log(this.stack2[i]);
//           }
//         }
//       }
//     }

//     const queue = new StackwithQeueu()
//     queue.enqueue(1)
//     queue.enqueue(2)
//     queue.enqueue(3)
//     queue.enqueue(4)
//     queue.dequeue()
//    //  console.log(queue.dequeue());
//     queue.display()


// class stack{
//     constructor(size){
//         this.array = Array (size)
//         this.top = -1
//     }
//     push(value){
        
//         this.top++
//         this.array[this.top] = value
//     }
//     pop(){
//         if(this.top==-1){
//             return null
//         }
//         this.top--
//     }

//      removemiddle(){
    
//       let mid = Math.floor(this.top/2)
//       this.array.slice(mid,1)
//       return this.top--
//     }
//     peek(){
//         return this.array[this.top]
//     }
//     size(){
//         return this.top+1
//     }
//     desplay(){
//         if(this.top==-1){
//             return null
//         }else{
//             for(let i = 0;i<=this.top;i++){
//                 console.log(this.array[i]);
//             }
//         }
//     }
// }

// const stacklist = new stack(50)

// stacklist.push(30)
// stacklist.push(20)
// stacklist.push(10)
// stacklist.push(30)
// stacklist.push(90)
// stacklist.pop()
// stacklist.desplay()
// console.log(stacklist.peek());
// console.log(stacklist.size());

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class stack{
//     constructor(){
//         this.top = null
//     }
//     push(value){
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//         }else{
//             node.next = this.top 
//             this.top = node
//         }
//     }
//     pop(){
//         if(!this.top){
//             return null
//         }else{
//             this.top = this.top.next
//         }
//     }
//     desplay(){
//         if(!this.top){
//             return null
//         }else{
//             let temp = this.top
//             while(temp){
//                 console.log(temp.value);
//                 temp = temp.next
//             }
//         }
//     }
// }

// const stacklist = new stack()

// stacklist.push(10)
// stacklist.push(20)
// stacklist.push(10)
// stacklist.push(40)
// stacklist.push(50)
// stacklist.pop()

// stacklist.desplay()

// class queue{
//     constructor(size){
//         this.array = Array (size)
//         this.front = -1
//         this.rear = -1
//     }
//     eq(element){
//         if(this.front==-1&&this.rear==-1){
//             this.front = 0
//             this.rear = 0
//             this.array[0]=element
//             return
//         }else{
//             this.rear++
//             this.array[this.rear] = element
//         }
//     }
//     dq(){
//         if(this.front==-1){
//             return null
//         }else if(this.front == this.rear){
//             this.front = -1
//             this.rear = -1
//         }
//         this.front++
//     }
//     desplay(){
//         if(this.front == -1 && this.rear == -1){
//             return null
//         }else{
//             for(let i = this.front;i<= this.rear;i++){
//                 console.log(this.array[i]);
//             }
//         }
//     }
// }

// const quelist = new queue(50)

//  quelist.eq(10)
//  quelist.eq(20)
//  quelist.eq(30)
//  quelist.eq(40)
//  quelist.dq()
//  quelist.desplay()


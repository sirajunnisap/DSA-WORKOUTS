// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(value){
//         const node=new Node(value)
//         if(!this.front){
//             this.front=node;
//             this.rear=node
//         }
//         else{
//             this.rear.next=node
//             this.rear=node
//         }
//     }
//     dequeue(){
//         if(!this.front){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
//         }
//     }
//     print(){
//         if(!this.front){
//             console.log("empty");
//         }
//         else{
//             let temp=this.front
//             while(temp){
//                 console.log(temp.value)
//                 temp=temp.next
//             }
//         }
//     }
// }
// const list =new queue()

// list.enqueue(10)
// list.enqueue(20)
// list.enqueue(30)
// list.enqueue(40)
// list.enqueue(50)

// // list.dequeue()
// // list.dequeue()
// list.dequeue()


// list.print()







// class Queue{
//     constructor(size){
//          this.front=-1
//          this.rear=-1
//          this.array = new Array(size)
//     }
//     nq(value){
//         if (this.rear==-1) {
//             this.front=0
//             this.rear=0
//             this.array[0]=value
//             return
//         }
//         this.rear++
//         this.array[this.rear]=value
//     }
//     dq() {
//              if (this.front == -1) {
//                      return null
//                  }
//                  if (this.front == this.rear) {
//                      this.front = -1
//                      this.rear = -1
//                      return
//                  }
//                  this.front++
//         }
//     display(){
//         if (this.front==-1&&this.rear==-1) {
//             return null
//         }else{
//           for (let i = this.front; i <=this.rear; i++) {
//                console.log(this.array[i]);
               
            
//           }
//         }
//     }
// }

// const queue= new Queue(30)
// queue.nq(10)
// queue.nq(20)
// queue.nq(30)
// queue.nq(40)
// queue.nq(50)
// queue.dq()
// queue.display()


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
    }
    eq(element){
        const node = new Node(element)
        if(!this.front){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
    }
    dq(){
        if(!this.front){
            return null
        }else{
            this.front= this.front.next
            if(this.front==null){
                this.rear == null
            }

        }
    }
    desplay(){
        if(!this.front){
            return null
        }else{
            let temp = this.front
            while(temp){
                console.log(temp.value);
                temp  = temp.next
            }
        }
    }
}

const quelist = new queue()

quelist.eq(30)
quelist.eq(20)
quelist.eq(10)
quelist.eq(50)
quelist.dq()
quelist.desplay()



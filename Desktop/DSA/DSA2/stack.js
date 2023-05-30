class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null
    }
    push(value){
        const node=new Node(value)
        if(!this.top){
            this.top=node
        }
        else{
            node.next=this.top
            this.top=node
        }
    }
    pop(){
        if(!this.top){
            console.log("unflow stack");
        }
        else{
            this.top=this.top.next
        }
    }
    print(){
        if(!this.top){
            console.log("unflow stack");
        }
        else{
            let temp=this.top
            while(temp){
                console.log(temp.value);
                temp=temp.next
            }
        }
    }
}
const list=new stack()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)

// list.pop(0)

list.pop()
list.pop()
list.pop()

list.print()



// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     push(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//             this.size++
//         }
//     }
//     pop(){
//         if(!this.head){
//             return null
//         }else{
//             this.head = this.head.next
//         }
//     }
//     print(){
//         if(!this.head){
//             console.log("list is empty");
//         }else{
//             let temp = this.head
//             while(temp){
//                 console.log(temp.value);
//                 temp = temp.next
//             }
//         }
//     }
// }


// const list = new linkedlist()

// list.push(50)
// list.push(45)
// list.push(60)
// list.pop()
// list.print()



 





   class Stack{
    constructor(size){
        this.array = Array(size)
        this.top = -1
    }
    push(element){

        this.top++
        this.array[this.top]=element

    }
    pop(){
        if (this.top==-1) {
            return null
        }
        this.top--
    }
    peek(){
        return this.array[this.top]
    }
    size(){
        return this.top+1
    }
    display(){
        if(this.top==-1){
            return null
        }else{
            for (let i = 0; i <=this.top; i++) {
                 console.log(this.array[i]);
                
            }
        }
    }
}

const stack = new Stack(50)

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
// stack.pop()
stack.display()
console.log(stack.size());
console.log(stack.peek());





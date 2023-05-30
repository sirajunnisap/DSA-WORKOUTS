// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkList {
//     constructor(){
//         this.head = null 
//         this.size = 0 
        
//                       // to check the number of nodes in the list
//                       // whenever we add a new node we will incriment the value
//                       // remove a node decriment the size value that is are constructure
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty){
//             console.log("List is Empty");
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
      
//     }


// }

// const list = new linkList()  
                      
//                        //create a instence of the linkedlist class

// console.log('list is empty?',list.isEmpty());
// console.log('list size',list.getSize());

// list.print()
// list.prepend(11)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.prepend(15)
// list.print()









class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
    }

    addnode(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
        }
        this.tail = node
    }
    //Time Complexity: O(1)
    //Auxiliary Space: O(1)

    addBefore(value,pos){
        const node = new Node (value)
        if(!this.head){
            this.head = node
        }else if(this.head.value == pos){
                node.next = this.head
                this.head = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.next.value == pos){
                    node.next = temp.next
                    temp.next = node
                    return 
                }
                temp = temp.next
            }
        }
    }


    addAfter(value,pos){
        const node = new Node(value)

        if(!this.head){
            this.head = node
        }else if(this.head.value == pos){
            node.next = this.head.next
            this.head.next = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.value==pos){
                    node.next = temp.next
                    temp.next = node
                    return
                }
                temp = temp.next
            }
        }
    }
    //Inserts a new node after the given prev_node.

    //Time complexity: O(1)
     //Auxiliary Space: O(1)


    addLast(value){

        const node = new Node(value)

        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
            this.tail = node
        }

    }
    //Time complexity: O(N)where N is the number of nodes in the linked list. Since there is a loop from head to end, the function does O(n) work. 
//This method can also be optimized to work in O(1) by keeping an extra pointer to the tail of the linked list/
//Auxiliary Space: O(1)


    deleteFirst(){
        if(!this.head){
            return null 
        }else{
            this.head = this.head.next
        }
    }

     deletepos(value){
        if(!this.head){
            return null
        }
        else if(this.head.value==value){
            this.head=this.head.next
        }
        else{
            let temp=this.head
            while(temp.next){
                if(temp.next.value==value){
                   temp.next = temp.next.next
                 }
               temp = temp.next

             }
         }
    }

    deleteLast(){
        if(!this.head){
            return null
        }else{
            let temp = this.head
            while(temp.next.next){
               temp = temp.next
            }
            // while loop that continues until temp.next.next is null, which means temp is pointing to the second-to-last node.
            // By traversing unti   temp.next.next, we ensure that temp remains one node behind the last node.

            temp.next = null
            this.tail = temp
            
        }
    }
    // deleteafter(pos){
    //     if(!this.head){
    //         return null
    //     }else if(this.head.value==pos){
    //         this.head.next= this.head.next.next
    //     }
    //     else {
    //         let temp = this.head
    //         while(temp){
    //             if(temp.value==pos){
    //                 temp.next = temp.next.next
    //             }
    //             temp= temp.next
    //         }
    //     }
    // }
    // deletebefore(pos){
    //     if(!this.head){
    //         return null
    //     }else if(this.head.value == pos){
    //         return null
    //     }else{
    //         let temp = this.head
    //         while(temp){
    //             if(temp.next.value == pos){
    //               temp.next =  temp.next.next
    //             }
    //             temp = temp.next
    //         }
    //     }
    // }

    updatevalue(oldvalue ,newvalue){
        let temp = this.head
        while(temp){
            if(temp.value == oldvalue){
                temp.value = newvalue
                break;
            } 
            temp = temp.next
        }
    }
    removeduplicate(){
        if(!this.head){
            this.head = node
        }else{
            let temp = this.head
          while(temp){
            let check = temp 
            while(check.next){
                if(check.next.value === temp.value){
                    check.next = check.next.next
                }else{
                    check = check.next
                }
            }
            temp = temp.next
          }
            
        }
    }
    
    reverselinked(){
        let array = []
        let temp = this.head
        while(temp){
            array.push(temp.value)
            temp = temp.next
        }
        for(let i=array.length-1;i>=0;i--){
            console.log(array[i]);
        }
    }
    search(value) {
        let temp = this.head;
        while (temp) {
          if (temp.value == value ) {
            return true; // Value found
          }
           temp = temp.next;
        }
        return false; // Value not found
    }

    print (){
        if(!this.head){
            console.log("list is Empty");
        }else{
            let temp = this.head
             while(temp){
                if(temp){
                    console.log(temp.value);
                    temp = temp.next
                }
             }
        }
        
    }

}

const list = new linkedlist()

list.addnode(10)
list.addnode(10)
list.addnode(30)
list.addnode(20)
list.addnode(40)
// list.addnode(50)
// list.addnode(60)
// list.addnode(80)
// list.addnode(50)
list.addBefore(30,20)
list.addAfter(50,40)
// list.deleteFirst()
// list.deletepos(80)
// // list.deleteafter(30)
// // list.deletebefore(10)
// list.removeduplicate()
// list.updatevalue(40,70)
console.log(list.search(50)); 
// list.reverselinked()
list.print()



//Time Complexity: O(N)
//Auxiliary Space: O(1)







class Node1{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function convert(array){
    if(!array || array.length === 0){
        return null
    }
    let head = new Node1(array[0])
    let temp = head
    for(let i =1;i<array.length ; i++){
        temp.next = new Node1(array[i])
        temp = temp.next
    }
    return head
}

console.log(convert([1,2,3]));


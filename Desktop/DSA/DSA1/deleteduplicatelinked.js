


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
list.addnode(20)
list.addnode(20)
list.addnode(20)
list.addnode(30)
list.addnode(50)
list.removeduplicate()
list.print()
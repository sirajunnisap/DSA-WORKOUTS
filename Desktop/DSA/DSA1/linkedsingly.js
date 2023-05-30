class Node{
    constructor(value){
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

    deletepos(pos){
       if(!this.head){
        return null
       }else if(this.head.value == pos){
        this.head = this.head.next
       }else{
        let temp = this.head
        while(temp.next){
            if(temp.next.value == pos){
                temp.next = temp.next.next
            }
            temp = temp.next
        }
       }
    }
    deletefirst()
    print(){
        if(!this.head){
            console.log("list is empty");
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
list.addnode(30)
list.addnode(40)

list.deletepos(30)

list.print()
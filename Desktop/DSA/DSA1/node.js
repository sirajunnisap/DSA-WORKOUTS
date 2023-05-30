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
        let node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
        }
        this.tail = node
    }
    addfirst(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
       
    }
    addlast(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }

    addbefore(value,pos){
        let node = new Node(value)
        if(!this.head){
            this.head = node
        }else if(this.head.value == pos){
           node.next = this.head
           this.head = node
        }else{
            let temp = this.head
            while(temp.next.vlaue == pos){
                node.next = temp.next
                temp.next = node
                return 
            }
            temp = temp.next
        }
    }

    addafter(value,pos){
        let node = new Node(value)
        if(!this.head){
            this.head = node
        }else if(this.head.value == pos){
           node.next = this.head.next
           this.head.next = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.value == pos){
                    node.next = temp.next
                    temp.next= node
                }
                temp = temp.next
            }
        }
    }
    deletefirst(){
        if(!this.head){
            return null
        }else{
            this.head = this.head.next
        }
    }
    deletelast(){
        if(!this.head){
            return null
        }else{
            let temp = this.head
            while(temp.next.next){
                temp = temp.next
            }
            temp.next = null
            this.tail = temp
        }
    }
    deletepos(pos){
        if(!this.head){
            return null
        }else if(this.head.value == pos){
            this.head = this.head.next
        }else{
            let temp = this.head
            while(temp){
                if(temp.next.value == pos){
                    temp.next = temp.next.next
                }
              temp= temp.next
            }
        }
    }
    print(){
        if(!this.head){
            console.log("list is Empty");
        }else{
            let temp = this.head
            while(temp){
                console.log(temp.value);
                temp = temp.next
            }
        }
    }
}

let list = new linkedlist()

list.addnode(50)
// list.addfirst(40)
list.addbefore(30,40)
list.addlast(60)
list.addafter(80,30)
list.deletefirst()
list.deletelast()
list.deletepos(80)
list.print()
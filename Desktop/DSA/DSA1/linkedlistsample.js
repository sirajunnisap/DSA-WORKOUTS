class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist {
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

    addafter(pos,value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let temp = this.head
            while(temp){
                if(temp.value == pos){
                    node.next = temp.next
                    temp.next = node
                    return
                }
                temp = temp.next
            }
        }
    }

    
    addbefore(value,pos){
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

    addlast(value){
        const node = new Node (value)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
        }
        this.tail = node
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
        }else{
            let temp = this.head
            while(temp){
                if(temp.next.value == pos){
                    temp.next = temp.next.next
                }
                temp = temp.next
            }
        }
        
    }
    removeduplicate(){
        let temp = this.head
        while(temp){
            let check = temp
            while(check.next){
                if(check.next.value == temp.value){
                    check.next = check.next.next
                }else{
                    check = check.next
                }
            }
            temp = temp.next
        }
    }
    updatevalue(oldvalue,newvalue){
        let temp = this.head

        while(temp){
            if(temp.value == oldvalue){
               temp.value = newvalue
                break;
            }
            temp=temp.next
        }
    }

    search(value){
        let temp = this.head
        while(temp){
            if(temp.value == value){
                return true
            }
            temp = temp.next
        }
        return false
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
list.addnode(50)


list.addafter(30,35)
list.addbefore(15,20)
list.addlast(100)


list.deletefirst()
list.deletelast()
list.deletepos(50)


list.removeduplicate()


list.updatevalue(40,70)

list.reverselinked()

console.log(list.search(35));

list.print()


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
list.addnode(30)
list.print()


function convertToarray(head){
    let arr = []
    while(head){
        arr.push(head.value)
        head = head.next
    }
    console.log(arr);
}

convertToarray(list.head)



class secondNode{
    constructor(value){
        this.value = value
        this.next = null 
    }
}
class secondlinkdedlist{
    constructor(){
        this.head = null
        this.tail = null
    }

    addnode(value){
        const node = new secondNode(value)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
        }
        this.tail = node
    }
    print(){
        if(!this.head){
             console.log('list is empty');
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

let secondlist = new secondlinkdedlist()

secondlist.addnode(20)
secondlist.addnode(40)
secondlist.print()


function convert(head){
    let arr = []
    while(head){
        arr.push(head.value)
        head = head.next
    }
    console.log(arr);
   
}
convert(secondlist.head)
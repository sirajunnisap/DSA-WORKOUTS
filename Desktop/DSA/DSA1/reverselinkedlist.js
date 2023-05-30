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
          if (temp.value == value) {
            return true; // Value found
          }
          temp = temp.next;
        }
        return false; // Value not found
      }
      
    print(){
        if(!this.head){
            console.log("list is empty");
        }else{
            let temp = this.head
            while(temp){
                console.log(temp.value);
                temp = temp.next
            }
        }
    }
    
}

const list = new linkedlist()

list.addnode(10)
list.addnode(20)
list.addnode(30)
list.addnode(60)

list.print()
list.reverselinked()
console.log(list.search(30)); 
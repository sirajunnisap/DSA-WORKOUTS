class StackwithQeueu{
    constructor(){
      this.stack1=[]
      this.stack2=[]
    }
    enqueue(element){
      this.stack1.push(element)
    }
    dequeue(){
      if (this.stack1.length ===0 && this.stack2.length===0) {
        return null
      }
      if (this.stack2.length==0) {
        while (this.stack1.length>0) {
               this.stack2.push(this.stack1.pop())
               console.log(this.stack2);
        }
      }
     
      return this.stack2.pop()
    }
    display(){
      if(this.stack1.length==0&&this.stack2.length==0){
        return null
      }else{
        for (let i = 0; i < this.stack2.length; i++) {
              console.log(this.stack2[i]);
        }
      }
    }
  }
  
  const queue = new StackwithQeueu()
   queue.enqueue(1)
   queue.enqueue(2)
   queue.enqueue(3)
   queue.enqueue(4)
   queue.dequeue()
  //  console.log(queue.dequeue());
   queue.display()

   
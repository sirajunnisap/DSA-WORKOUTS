// class stack{
//     constructor(size){
//         this.array = Array (size)
//         this.top = -1
//     }
//     enqueue(element){
//         this.top++
//         this.array[this.top] = element
//     }
//     deletemiddle(){
//         let mid = Math.floor(this.top/2)
//         this.array.slice(mid,1)
//         return this.top--
//     }
//     desplay(){
//         if(this.top==-1){
//             return null
//         }
//         for(let i=0;i<=this.top;i++){
//             console.log(this.array[i]);
//         }
//     }
// }

// const list = new stack(40)

// list.enqueue(50)
// list.enqueue(20)
// list.enqueue(10)
// list.enqueue(60)
// list.enqueue(90)
// // list.deletemiddle()
// console.log(list.deletemiddle());

// list.desplay()




function reversestring(str){
    let stack =[]
    let reversestring = []

    for(let i = 0 ;i<str.length;i++){
        stack.push(str[i])
    }

    while(stack.length>0){
        let code = stack.pop() 
        reversestring.push(code)
    }

    return reversestring.join('')

}

let string = "sirajunnisa"

console.log(reversestring(string));
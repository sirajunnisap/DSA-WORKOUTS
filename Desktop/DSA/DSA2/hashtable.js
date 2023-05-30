// class HashTable{
//         constructor(size){
//             this.table = new Array(size)
//             this.size = size
//         }
//         hash(key){
//             let total = 0
//             for (let i = 0; i < key.length; i++) {
//                 total += key.charCodeAt(i)
                
//             }
//             return total % this.size
//         }
//         set(key,value){
    
//             const index = this.hash(key)
//             this.table[index] = value
//         }
//         get(key){
//             const index = this.hash(key)
//             return this.table [index]
//         }
//         remove(key){ 
//             const index = this.hash(key)
//             this.table[index] = undefined
//         }
//         display(){
//             for (let i = 0; i < this.table.length; i++) {
//                 if (this.table[i]) {
//                     console.log(i,this.table[i]);
//                 }
                
//             }
//         }
//     }
    
//     const table = new HashTable(50)
//     table.set("name","vivek")
//     table.set("age",19)
//     table.set("mane","vviek")
//     table.remove("name")
//     table.display()
//     console.log(table.get("name"));
//     console.log(table.get("age"));


    // class HashTable{
    //     constructor(size){
    //         this.table = new Array(size)
    //         this.size = size
    //     }
    //    hash(key){
    //     let total = 0
    //     for(let i=0;i<key.length;i++){
    //         total += key.charCodeAt(i)
    //     }
    //     return total % this.size
    //    }

    //    set(key,value){
    //     const index = this.hash(key)
    //     this.table[index] = value
    //    }
    //    get(key){
    //     const index = this.hash(key)
    //     return this.table[index]
    //    }
    //    remove(key){
    //     const index = this.hash(key)
    //     this.table[index] = undefined
    //    }
    //    display(){
    //     for(let i =0 ;i<this.table.length;i++){
    //         if(this.table[i]){
    //             console.log(i,this.table[i]);
    //         }
    //     }
    //    }
    // }

 
    // const table = new HashTable(50)
    // table.set("name","vivek")
    // table.set("age",19)
    // // table.set("mane","vviek")
    // // table.remove("name")
    // table.display()
    // // console.log(table.get("name"));
    // // console.log(table.get("age"));


    class hashtable{
        constructor(size){
            this.table = new Array(size)
            this.size = size
        }
        hash(key){
            let total = 0
            for(let i = 0;i<key.length;i++){
                total += key.charCodeAt(i)
            }
            return total%this.size
        }
        set(key,value){
            const index = this.hash(key)
            this.table[index] = value
        }
        get(key){
            const index = this.hash(key)
            return this.table[index]
        }
        remove(key){
            const index = this.hash(key)
            this.table[index] = undefined
        }
        display(){
            for(let i = 0 ; i<this.table.length; i++){
                if(this.table[i]){
                    console.log(i,this.table[i]);
                }
            }
        }

    }

    const table = new hashtable(50)

    table.set("name","sirajunnisa")
    table.set("age",18)
    table.remove("age")
    table.display()
    console.log(table.get("name"));
// isBst(root=this.root,minvalue=Number.MIN_SAFE_INTEGER,maxvalue=Number.MAX_SAFE_INTEGER){
//     if(root===null){
//         return true
//     }
//     if(root.value<minvalue ||root.value>maxvalue){
//         return false
//     }
//     return this.isBst(root.left,minvalue,root.value-1) && this.isBst(root.right,root.value+1,maxvalue)

// }
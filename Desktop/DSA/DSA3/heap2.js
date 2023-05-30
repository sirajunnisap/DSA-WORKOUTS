let a=[100,50,2,5,3,8,9,67,4]

const buildHeap=()=>{
    let parrent=Math.floor((a.length-2)/2)
    for(let i=parrent;i>=0;i--){
        shiftDown(i)
    }
}
const shiftDown=(crr)=>{

    let leftIdx=(crr*2)+1
    let shift
    while(leftIdx<a.length-1){
        let rightIdx=(crr*2)+2
        if(rightIdx<=a.length && a[rightIdx]<a[leftIdx]){
            shift=rightIdx
        }else{
            shift=leftIdx
        }
        if(a[shift]<a[crr]){
            let t=a[shift]
            a[shift]=a[crr]
            a[crr]=t
            crr=shift
            leftIdx=(crr*2)+1
        }else{
            return
        }
    }
}
const heap=(crr)=>{
    let leftIdx=(crr*2)+1
    while(leftIdx<a.length-1){
        let rightIdx=(crr*2)+2
        let shiftIdx
        if(rightIdx<a.length && a[rightIdx]<a[leftIdx]){
            shiftIdx=rightIdx
        }else{
            shiftIdx=leftIdx
        }
        if(a[crr]>a[shiftIdx]){
            let t=a[shiftIdx]
            a[shiftIdx]=a[crr]
            a[crr]=t
            crr=shiftIdx
            leftIdx=crr*2+1
        }else{
            return
        }
    }
}
const insert=(val)=>{
    a.push(val)

    let parrent=Math.floor((a.length-2)/2)
    let crr=a.length-1
    while(parrent>=0){
        if(a[parrent]>val){
            let t=a[parrent]
            a[parrent]=a[crr]
            a[crr]=t
            crr=parrent
            parrent=Math.floor((crr-1)/2)
        }else{
            return
        }
    }
}

const dlte=()=>{
    let t=a[0]
    a[0]=a[a.length-1]
    a.pop()
    deleteDoen(0)
}

const deleteDoen=(crr)=>{

    let left=crr*2+1

    while(left<a.length-1){
        let right=crr*2+2
        let shiftIdx
        if(right<=a.length-1){
            if(a[right]<a[left]){
                shiftIdx=right
            }else{
                shiftIdx=left
            }
        }
        if(a[shiftIdx]<a[crr]){
            let t=a[shiftIdx]
            a[shiftIdx]=a[crr]
            a[crr]=t

            crr=shiftIdx
            left=shiftIdx*2+1
        }else{
            return
        }

    }
}

buildHeap()
insert(1)
dlte()
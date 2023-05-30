// function abc (num1,num2){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
            
//         reject("error")
//         },2000)
//     })
// }
// abc(10,20).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// async function result(){
//     let output = await abc(10,20)
//     console.log(output);
// }
// result();


let array = [10,20,30,40,50]

for(let i =0;i<array.length;i++){
    console.log(array[i]);
}
let result = array.reverse()
console.log(result);

let sum =0
for(let i =0;i<array.length;i++){
    sum += array[i]
}
console.log(sum);


let mystr = "sirajunnisa"
let reversestr = mystr.split("").reverse().join("")
console.log(reversestr);

let slicestr = mystr.slice(2,8)
console.log(slicestr);

let replace = mystr.replace("junni","ashiya")
console.log(replace);

let upper = mystr.toUpperCase()
console.log(upper);

let maparr = array.map((x)=>x*2)
console.log(maparr);

let filtarr = array.filter((x)=> x%2==0) 
console.log(filtarr);

let resucearr = array.reduce((acc,crr)=>{
    return acc+crr
})
console.log(resucearr);


function fullname (hometown,state){
    return this.fName+" "+this.lName +" from:" +hometown +","+state
}


let obj1 ={
    fName:"fathima",
    lName:"thanha"
}

let callobj = fullname.call(obj1,"manjeri","kerala");
console.log(callobj);

let applyobj = fullname.apply(obj1,["malappuram","kerala"])
console.log(applyobj);

let bindobj = fullname.bind(obj1);
console.log(bindobj());



let newarray = [10,20,30,40,50]
let spreadar = [...newarray]
console.log(spreadar);

let addspread = [...newarray,...array]
console.log(addspread);

let sortarr = addspread.sort()
console.log(sortarr);




for (let a=1;a<=10;a++){
    console.log(a);
}


let b = 10
while(b>=1){
    console.log(b);
    b--;
}


let i = 10
do{
    console.log(i);
    i++;
}while(i<=20)


let pali = "MALAYALAM"
let change = pali.split("").reverse().join("");
if(pali==change){
console.log(`this string  ${pali} is palindrome`);
}else{
    console.log(`this string  ${pali} is not palindrome`);
}


let count = array.length
console.log(count);

let splicearr = array.splice(2,1)
console.log(array);

console.log(mystr.indexOf("j"));

let dupliarray = [1,1,2,3,4,2,5,5,7,9,6]
const distinctArr = [...new Set(dupliarray)];
console.log(distinctArr); 


let z = "10"
let x = 30
console.log(parseInt(z));
console.log(x.toString());




let johnage = 30
if(johnage>50){
    console.log("you are old");
}else if(johnage<35 && johnage>20){
    console.log("you are too young");
}else{
    console.log("not allowed");
}


let fruite = "apple"
let fruitecolor;
switch(fruite){
    case "orange" :
        fruitecolor = "orange";
        break;
     
    case "apple"  :
        fruitecolor = "red";
        break;
     
    default :
        console.log("error");    
}
console.log(`the fruite is ${fruite} .colour is${fruitecolor}`);


let [first,second,third] = array
console.log(first);

let {fName} = obj1
console.log(fName);

let end = [first,...array]
console.log(end);
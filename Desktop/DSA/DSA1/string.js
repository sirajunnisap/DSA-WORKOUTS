//string methods 


//  * split('')  string  will split each element in a array separated coma
//  * reverse()
//  * join('')
//  * slice( startIndex , finishIndex )
//  * replace( " which string you want to replace  "   , " new  string "  )  ,replaceAll()
//  * toUpperCase() , toLowerCase()
//  * concat(" ","new string")
//  * trim()  , trimStart()  , trimEnd()





//check string is palindrome


function string(string){

    for(let i=0, j=string.length-1; i < j ; i++ ,j-- ){
        if(string[i]!== string[j]){
            return false
        }
    }
    return true
}

console.log(string("malayalam"));
console.log(string("rtyubbn"));


let pstring = "qwertyuio"
let reverse = pstring.split('').reverse().join('')
if(pstring == reverse){
    console.log(`${pstring} is palindrome`);
}else {
     console.log(`${pstring} is not palindrome`);
}






let msg = 'who are you'
let count = 2
let change = count%26
let res=''
for (let i = 0; i < msg.length; i++) {
    code = msg.charCodeAt(i)+change
    res+=String.fromCharCode(code)
    
}
console.log(res)
console.log(msg.toUpperCase());


//String.fromCharCode(code) 
//is a built-in JavaScript function that returns a string created by converting the given Unicode values (UTF-16 code units) back into characters.
// It allows you to convert a Unicode value into its corresponding character representation.

//charCodeAt(i) 
//method is a built-in JavaScript function that returns the Unicode value (UTF-16 code unit) of the character at the specified index i in a string. 
//It allows you to access the numerical representation of a character in the string.


let stringqst = "what is this"
let countno = 2
let changecount  = countno%26
let result = ''

for(let i = 0;i<stringqst.length ; i++){
    code = stringqst.charCodeAt(i)+countno
    result+=String.fromCharCode(code)
}

console.log(result);
console.log(stringqst);


let replacestring = "asdfghjkl"
let resultstr = replacestring.replace("g","i")
console.log(resultstr);


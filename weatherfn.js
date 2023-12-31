const countVowels = (str)=>{
    let count = 0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
countVowels("karanishere");

console.log("karan".toUpperCase());

let arr = ["pune", "delhi", "patna"];
arr.forEach((val, idx, arr) => {            
    console.log(val.toUpperCase(), idx, arr);
})

/*
HIGHER ORDER FUNCTIONS/METHODS
that EITHER takes another fn as a parameter inside them 
OR 
they return another fn as their output
*/

let n = prompt("enter a number : ");
let newarr = [];
for(let i=1; i<=n; i++){
    newarr[i-1] = i;
}
console.log(newarr);
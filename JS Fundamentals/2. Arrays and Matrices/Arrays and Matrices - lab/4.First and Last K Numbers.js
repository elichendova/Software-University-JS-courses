function firstAndLastKnums(input){
let k = input.shift();
let arr = input;
let firstK = arr.slice(0,k).join(" ");
let secondK = arr.slice(-k).join(" ");
return firstK.concat("\n",secondK);
}
function negativePositiveNums(num){
let result = [];
for (let number of num ) {
number >= 0 ? result.push(number) : result.unshift(number);
}
return result.join("\n");
}
function printEveryNth(input){
let step = input.pop();
let result = [];

for(let index in input) {
    if(index === 0 || index % step === 0) {
        result.push(input[index]);
    }
}
return result.join("\n");
}
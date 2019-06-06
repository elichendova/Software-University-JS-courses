function solve(input) {
let num = Number(input.shift(0));
let sum = 0;

for (let index = 0; index < num; index++) {
    let number = Number(input[index]);
    sum += number;
    
}
console.log(sum);

}
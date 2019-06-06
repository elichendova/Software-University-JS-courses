function solve(input) {
let num = Number(input.shift(0));
let numMax = Number.MIN_SAFE_INTEGER;
let numMin = Number.MAX_SAFE_INTEGER;


for (let i = 0; i < num; i++) {
    let number = Number(input[i]);
    if (number > numMax) {
        numMax = number;
    }
    if (number < numMin) {
        numMin = number;
    }
}
console.log(`Max number: ${numMax}`);
console.log(`Min number: ${numMin}`);

}
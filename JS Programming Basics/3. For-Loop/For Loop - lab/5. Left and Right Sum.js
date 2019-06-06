function solve(input) {
let num = Number(input[0]);
let leftSum = 0;
let rightSum = 0;

for (let i = 1; i <= num * 2; i++) {
    let number = Number(input[i]);

    if(i <= num){
        leftSum += number;
    } else {
        rightSum += number;
    }
}

let totalSum = leftSum + rightSum;
let diff = Math.abs(leftSum - rightSum);

if (diff == 0) {
    console.log(`Yes, sum = ${leftSum}`);
} else {
    console.log(`No, diff = ${diff}`);
}
}
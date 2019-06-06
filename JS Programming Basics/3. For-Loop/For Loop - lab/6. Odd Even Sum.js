function solve(input) {
let num = Number(input[0]);
let sumOdd = 0;
let sumEven = 0;
let diff = 0;

for (let i = 1; i <= num; i++) {
    let number = Number(input[i]);

    if (i % 2 === 0) {
        sumEven += number;
    } else {
        sumOdd += number;
    }
}

diff = Math.abs(sumEven - sumOdd);

if (sumOdd === sumEven) {
    console.log(`Yes\nSum = ${sumEven}`);
} else {
    console.log(`No\nDiff = ${diff}`);
}

}
   function solve(input) {
    let n = Number(input.shift(0));
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++ ) {
        let currentNumber = Number(input[i]);
        sum += currentNumber;
        if (currentNumber > max) {
            max = currentNumber;
        }
    }

    sum -= max;

    if (sum === max) {
        console.log(`Yes\nSum = ${sum}`);
    } else {
        let diff = Math.abs(max - sum);
        console.log(`No\nDiff = ${diff}`);
    }

}
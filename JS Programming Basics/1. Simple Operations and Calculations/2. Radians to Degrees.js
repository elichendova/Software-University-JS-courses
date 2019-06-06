function solve(input) {
    let radian = Number(input.shift());
    let pi = Math.PI;
    let result = radian * 180 / pi;
    console.log(result.toFixed(0));
    }
function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());
    let result = "";

if ((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
    result = "Border";
} else if ((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
    result = "Border";
}
else {
    result = "Inside / Outside";
}
    console.log(result);

}
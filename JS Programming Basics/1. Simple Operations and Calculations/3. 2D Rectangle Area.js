function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let n1 = Math.abs(x1 - x2);
    let n2 = Math.abs(y1 - y2);
    let area = n1 * n2;
    let surface = 2 * (n1 + n2);
    console.log(area.toFixed(2));
    console.log(surface.toFixed(2));
    }
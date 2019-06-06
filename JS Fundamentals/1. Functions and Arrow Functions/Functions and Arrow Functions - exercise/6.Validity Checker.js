function validityChecker(input) {
let x1 = input[0];
let y1 = input[1];
let x2 = input[2];
let y2 = input[3];

function point1Cartesian (x1, y1) {
    let c1 = 0;
    c1 = Math.sqrt(x1*x1 + y1*y1);
    if (Number.isInteger(c1)) {
        return `{${x1}, ${y1}} to {0, 0} is valid`;
    } else {
        return `{${x1}, ${y1}} to {0, 0} is invalid`;
    }
}

function point2Cartesian (x2, y2) {
    let c2 = 0;
    c2 = Math.sqrt(x2*x2 + y2*y2);
    if (Number.isInteger(c2)) {
         return `{${x2}, ${y2}} to {0, 0} is valid`;
    } else {
        return `{${x2}, ${y2}} to {0, 0} is invalid`;
    }
}

function pointsDistance (x1,y1,x2,y2){
    let distance = 0;
   distance = Math.sqrt(((x2 - x1)*(x2 - x1)) + ((y2 - y1)*(y2 - y1)));
   if (Number.isInteger(distance)) {
    return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
   } else {
    return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
}
}

console.log(point1Cartesian(x1,y1));
console.log(point2Cartesian(x2,y2));
console.log(pointsDistance(x1,y1,x2,y2));
}
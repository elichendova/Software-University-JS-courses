function solve(input) {
let num = input[0].length;
let word = input[0];
let valuesValue = 0;

for (let i = 0; i < num; i++) {
    let letter = word[i];
    switch (letter) {
        case "a":
        valuesValue += 1;
        break;

        case "e":
        valuesValue += 2;
        break;

        case "i":
        valuesValue += 3;
        break;

        case "o":
        valuesValue += 4;
        break;

        case "u":
        valuesValue += 5;
        break;

    }
}

console.log(valuesValue);

}
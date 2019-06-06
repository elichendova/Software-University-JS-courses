function printLetters(input) {
let result = [];
for(let letter in input) {
    result.push(`str[${letter}] -> ${input[letter]}`);
}
return result.join("\n");
}

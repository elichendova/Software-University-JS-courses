function extract(input) {
let currentbiggest = Number.MIN_SAFE_INTEGER;
let result = [];
input.filter(number => {
    if(number >= currentbiggest) {
        currentbiggest = number;
        result.push(currentbiggest);
    }
});
return result.join("\n");
}
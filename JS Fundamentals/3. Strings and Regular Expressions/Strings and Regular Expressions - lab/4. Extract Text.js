function extractText(input) {
    let output = [];
    let start = input.indexOf("(");
    let end = input.indexOf(')', start);
    while (start > -1 && end > -1) {
        let wordInBrackets = input.substr(start, end - start + 1);
        output.push(wordInBrackets.substr(1, wordInBrackets.length-2));
        input = input.replace(wordInBrackets, "");
        start = input.indexOf("(");
        end = input.indexOf(')', start);
    }
    return output.join(", ");
}
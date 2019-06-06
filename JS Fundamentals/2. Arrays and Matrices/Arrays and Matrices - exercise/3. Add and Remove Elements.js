function addRemoveElements(input) {
    let result = [];
    let sum = 0;
    input.forEach(element => {
        sum++;
        element === "add" ? result.push(sum) : result.pop();
    });
    result.length === 0 ? result = "Empty" : result = result.join("\n");
    return result;
}
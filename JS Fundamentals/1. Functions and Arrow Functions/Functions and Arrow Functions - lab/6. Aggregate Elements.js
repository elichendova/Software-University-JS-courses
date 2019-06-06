function aggregateElements(input) {
    let sum = 0;
    let sumAr = 0;
    let concat = "";
    
    
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sumAr += 1 / input[i];
        concat += input[i];
    }
    let output = sum + "\n" +sumAr+ "\n" +concat;
    return output;
}
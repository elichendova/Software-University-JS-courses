function sumByTown(input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        if (obj.hasOwnProperty(input[i])) {
            obj[input[i]] += +input[i + 1];
        } else {
            obj[input[i]] = +input[i + 1];
        }
    }
    return JSON.stringify(obj);
}
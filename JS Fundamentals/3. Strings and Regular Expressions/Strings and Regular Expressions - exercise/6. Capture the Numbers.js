function captureNums(input) {
let result = [];
input.forEach(string => {
    let pattern = /\d+/g;
    if(string.match(pattern) !== null) {
        
        result.push(string.match(pattern));
    }
});
return result.join(",").split(",").join(" ");
}
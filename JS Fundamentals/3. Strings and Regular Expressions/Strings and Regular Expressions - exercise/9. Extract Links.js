function extractLinks(input) {
let pattern = /(w{3}[.])([a-zA-Z0-9-]+\.){1,}([a-z]+){1,}/g;


let result = [];
input.forEach(string => {
    if(string.match(pattern) !== null) {
        result.push(string.match(pattern));
    }
});


return result.join("\n");
}
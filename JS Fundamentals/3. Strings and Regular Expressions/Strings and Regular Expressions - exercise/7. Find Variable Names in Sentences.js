function variableNames(input) {
    let regex = /^_[a-zA-Z0-9]+$/g
    let result = [];
    input.split(" ").forEach(word => {
        if(word.match(regex) !== null) {
            result.push(word.substr(1));
        }
    });
return result.join(",");
}
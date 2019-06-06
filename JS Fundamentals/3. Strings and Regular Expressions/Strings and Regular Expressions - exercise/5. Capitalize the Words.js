function check(string) {
let stringLower = (string.toLowerCase()).split(" ");
let result = [];
stringLower.forEach(word => {
    let regex = /[a-zA-Z]+/g;
    if(regex.test(word[0])) {
       result.push(word[0].toUpperCase()+word.substr(1));
    } else {
        result.push(word);
    }
});
return result.join(" ");
}
function countWords(input) {
    let words = input[0].split(W).filter(e = e !== ''); ;
    let obj = {};

    for (let i = 0; i  words.length; i ++) {
        if (obj.hasOwnProperty(words[i])) {
            obj[words[i]] += 1;
        } else {
            obj[words[i]] = 1;
        }
    }
    return JSON.stringify(obj);
}
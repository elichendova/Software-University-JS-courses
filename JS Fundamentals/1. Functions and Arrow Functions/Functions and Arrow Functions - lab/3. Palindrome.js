function solve (word) {
let halfWord = Math.floor(word.length / 2);

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[word.length - i - 1]) {
            return true;
        }
        return false;
    }
}
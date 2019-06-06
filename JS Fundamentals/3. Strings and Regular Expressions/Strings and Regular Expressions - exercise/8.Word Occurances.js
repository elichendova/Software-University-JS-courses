function extractLinks(string, word) {
let regex = new RegExp ("\\b"+(word)+"\\b", "gi");
let result = string.match(regex);

return result == null ? 0 :result.length;
}
function censorShip(text, censoredStrings) {

censoredStrings.forEach(cendsoredString => {
    while (text.indexOf(cendsoredString) > -1) {
        let replacement = "-".repeat(cendsoredString.length);
        text =  text.replace(cendsoredString, replacement);
    }
});

return text;
}
function extractUniqueWords(input) {
    let sentances = [];
    input.forEach(elements => {
        let lowerCaseElements = elements.toLowerCase();
        let words = lowerCaseElements.split(/\W/).filter(e => e !== '');
        sentances.push(words);
    });

    let result = sentances.join(",").split(",").filter(function (item, i, allItems) {
        return i == allItems.indexOf(item);
    }).join(', ');

    return result;
}
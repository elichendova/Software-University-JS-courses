function populationInTowns(input) {
    let obj = {};
    let result = "";
    input.forEach(entry => {
        let entryN = entry.split(" <-> ");
        if (obj.hasOwnProperty(entryN[0])) {
            obj[entryN[0]] += +entryN[1] ;
        } else {
            obj[entryN[0]] = +entryN[1];
        }
    });
    let entries = Object.entries(obj);
    for (let [city, count] of entries) {
        result += `${city} : ${count}\n`;
      }
    return result;
}
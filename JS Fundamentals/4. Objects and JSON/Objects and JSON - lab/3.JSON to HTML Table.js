function fromJSONToHTMLTable(input) {
    let map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    let objects = JSON.parse(input);
    let objKeys = Object.keys(objects[0]);
    let objKeysMapped = objKeys.map(objKey => objKey.replace(/[&<>"']/g, m => map[m]));
    let objValuesMapped = [];
    let objValues = objects.map(obj => {
        return Object.values(obj);
    });

    objValues.forEach(element => {
        objValuesMapped.push(element.map(objKey => {
            if (typeof objKey === "string") {
                return objKey.replace(/[&<>"']/g, m => map[m]);
            } else {
                return objKey;
            }
        }
        ));
    });

    let openTable = '<table>\n';
    let closeTable = '\n</table>';
    let firstLine = objKeysMapped.map(objKey => {
        return `<th>${objKey}</th>`;
    });
    let middleLines = [];

    objValuesMapped.forEach(obj => {
        middleLines += "\n<tr>"
        obj.forEach(element => {
            middleLines += `<td>${element}</td>`;
        });
        middleLines += "</tr>"
    });

    let output = openTable + "<tr>" + firstLine.join("") + "</tr>" + middleLines + closeTable;

    return output;
}
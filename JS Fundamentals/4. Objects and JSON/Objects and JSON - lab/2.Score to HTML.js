function scoreToHTML(input) {
let map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',       
    '"': '&quot;',
    "'": '&#39;'
};
let students = JSON.parse(input);
let studentsIDs = students.map(student => student.name.replace(/[&<>"']/g, m => map[m]));
let studentsResults = students.map(student => student.score);
let keys = Object.keys(students[0]);

let output = "<table>\n" + "<tr><th>" + keys[0] + "</th><th>" + keys[1] + "</th></tr>";
for (let i = 0; i < studentsIDs.length; i++) {
    output += "\n<tr><td>" + studentsIDs[i] + "</td><td>" + studentsResults[i] + "</td></tr>";
    if(i === studentsIDs.length - 1) {
        output += "\n</table>";
    }
}

return output;

}
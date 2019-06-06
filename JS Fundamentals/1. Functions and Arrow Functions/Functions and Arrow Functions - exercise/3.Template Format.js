function questions(input) {
let output = "";
let quizStart = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`
    let quizEnd = "</quiz>";
for (let i = 0; i < input.length; i += 2) {
    let questionText = input[i];
    let answerText = input [i + 1]; 
    output +=
`\n  <question>
    ${questionText}
  </question>
  <answer>
    ${answerText}
  </answer>`
}
    return `${quizStart}${output}\n${quizEnd}`;
}
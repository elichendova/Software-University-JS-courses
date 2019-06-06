function solve(input) {
    let inputOfBadGrades = Number(input.shift());

    let countForBadGrades = 0;
    let sumGrades = 0;
    let averageResult = 0;
    let counterForGrades = 0;
    let lastProblem = "";

    while (countForBadGrades < inputOfBadGrades) {
        
        let nameOfExercise = input.shift();
        let grade = Number(input.shift());
        if (nameOfExercise === "Enough") {
            averageResult = sumGrades / counterForGrades;
            console.log(`Average score: ${averageResult.toFixed(2)}\nNumber of problems: ${counterForGrades}\nLast problem: ${lastProblem}`);
            break; 
        }
      
        sumGrades += grade;
        counterForGrades++;

        if (grade <= 4) {
            countForBadGrades++;
        }
        lastProblem = nameOfExercise;
    }
    if (countForBadGrades == inputOfBadGrades) {
        console.log(`You need a break, ${countForBadGrades} poor grades.`);
    }
}

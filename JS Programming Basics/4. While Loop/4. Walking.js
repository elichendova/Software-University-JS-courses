function solve(input) {
    let targetSteps = 10000;
    let stepsCounter = 0;

    while (stepsCounter < targetSteps){
        let currentSteps = input.shift();
        if (currentSteps === "Going home") {
            let stepsHome = Number(input.shift());
            stepsCounter += stepsHome;
            if (stepsCounter >= targetSteps) {
                console.log("Goal reached! Good job!");

            } else {
                let stepsNeeded = targetSteps - stepsCounter;
                console.log(`${stepsNeeded} more steps to reach goal.`)
            }
            break;
        }
        stepsCounter += +currentSteps;
        if (stepsCounter >= targetSteps) {
            console.log("Goal reached! Good job!");
        }
    }
    
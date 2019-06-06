function solve(input) {
    let hettrick = false;
    let maxGoals = 0;
    let bestPlayerName = "";
    let playerName = input.shift();
    let goalsCount = Number(input.shift());

    while (playerName !== "END") {
        if (goalsCount > maxGoals) {
            maxGoals = goalsCount;
            bestPlayerName = playerName;
        }
        if (goalsCount >= 3) {
            hettrick = true;
        }
        if (goalsCount >= 10) {
            break;
        }
        playerName = input.shift();
        goalsCount = Number(input.shift());
    }

    console.log(`${bestPlayerName} is the best player!`);
    if (hettrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }

}
function solve(input) {
    let moneyNeeded = Number(input.shift());
    let moneyOwned = Number(input.shift());
    let spendCounter = 0;
    let daysCounter = 0;
    

    while(moneyOwned < moneyNeeded && spendCounter < 5){
        let command = input.shift();
        let money = Number(input.shift());

        if (command === "spend") {
            moneyOwned -= money;
            if(moneyOwned < 0) {
                moneyOwned = 0;
            }
            spendCounter++;
        } else {
            moneyOwned += money;
            spendCounter = 0;
        }
        if(moneyOwned < 0) {
            moneyOwned === 0;
        }
        daysCounter++;
    }

if (spendCounter === 5) {
    console.log("You can't save the money.");
    console.log(daysCounter);
}

if (moneyOwned >= moneyNeeded) {
    console.log(`You saved the money for ${daysCounter} days.`);
}
}
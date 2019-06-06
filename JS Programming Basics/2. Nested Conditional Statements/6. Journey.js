function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let holidayType = "";
    let moneySpent = 0;
    let destination = "";
    let result = "";


    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            moneySpent = budget * 0.30;
        } else {
            moneySpent = budget * 0.70;
        }
    } else if (budget <= 1000 && budget > 100) {
        destination = "Balkans";
        if (season === "summer") {
            moneySpent = budget * 0.40;
        } else {
            moneySpent = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        moneySpent = budget * 0.90;
    }

    if (season === "winter" || destination === "Europe") {
        holidayType = "Hotel";
    } else {
        holidayType = "Camp";
    }

    console.log(`Somewhere in ${destination}\n${holidayType} - ${moneySpent.toFixed(2)}`);
}
function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishermensCount = Number(input.shift());
    let moneyLeft = 0;
    let neededMoney = 0;
    let rent = 0;
    let discount = 0;
    let totalCostDiscount = 0;
    let result = "";

    if (season === "Spring") {
        rent = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        rent = 4200;
    } else if (season === "Winter") {
        rent = 2600;
    }

    if (fishermensCount <= 6) {
        discount = 0.10;
    } else if (fishermensCount >= 7 && fishermensCount <= 11) {
        discount = 0.15;
    } else if (fishermensCount >= 12) {
        discount = 0.25;
    }
    if (fishermensCount % 2 === 0 && season != "Autumn") {
        discount = +(discount + 0.05).toFixed(2);
    }

    totalCostDiscount = (rent - (discount * rent)).toFixed(2);
    neededMoney = totalCostDiscount - budget;
    moneyLeft = budget - totalCostDiscount;


    if (totalCostDiscount <= budget) {
        result = `Yes! You have ${moneyLeft.toFixed(2)} leva left.`;
    } else {
        result = `Not enough money! You need ${neededMoney.toFixed(2)} leva.`;
    }
    console.log(result);
}
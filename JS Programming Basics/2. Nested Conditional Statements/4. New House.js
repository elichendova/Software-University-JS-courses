function solve(input) {
    let flowersTypes = input.shift();
    let flowersCount = Number(input.shift());
    let budget = Number(input.shift());
    let moneyLeft = 0;
    let flowersPrice = 0;
    let totalFlowersPrice = 0;
    let neededMoney = 0;
    let result = "";

    if (flowersTypes === "Roses") {
        flowersPrice = 5;
        totalFlowersPrice = flowersPrice * flowersCount;
        if (flowersCount > 80) {
            totalFlowersPrice -= totalFlowersPrice *= 0.10;
        }

    } else if (flowersTypes === "Dahlias") {
        flowersPrice = 3.80;
        totalFlowersPrice = flowersPrice * flowersCount;
        if (flowersCount > 90) {
            totalFlowersPrice -= totalFlowersPrice *= 0.15;
        }
    } else if (flowersTypes === "Tulips") {
        flowersPrice = 2.80;
        totalFlowersPrice = flowersPrice * flowersCount;
        if (flowersCount > 80) {
            totalFlowersPrice -= totalFlowersPrice *= 0.15;
        }
    } else if (flowersTypes === "Narcissus") {
        flowersPrice = 3;
        totalFlowersPrice = flowersPrice * flowersCount;
        if (flowersCount < 120) {
            totalFlowersPrice += totalFlowersPrice *= 0.15;
        }
    } else if (flowersTypes === "Gladiolus") {
        flowersPrice = 2.50;
        totalFlowersPrice = flowersPrice * flowersCount;
        if (flowersCount < 80) {
            totalFlowersPrice += totalFlowersPrice *= 0.20;
        }
    }

    if (budget >= totalFlowersPrice) {
        moneyLeft = budget - totalFlowersPrice;
        result = `Hey, you have a great garden with ${flowersCount} ${flowersTypes} and ${moneyLeft.toFixed(2)} leva left.`;
    } else {
        neededMoney = totalFlowersPrice - budget;
        result = `Not enough money, you need ${neededMoney.toFixed(2)} leva more.`;
    }

    console.log(result);

}

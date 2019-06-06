function solve(input) {
let budget = Number(input.shift());
let objCount = Number(input.shift());
let objPrice = 0;
let objPriceTotal = 0;

for (let i = 0; i < objCount; i++) {
   let currentObj = input[i];
switch (currentObj) {
    case "hoodie":
        objPrice = 30;
        break;

        case "keychain":
        objPrice = 4;
        break;

        case "T-shirt":
        objPrice = 20;
        break;

        case "flag":
        objPrice = 15;
        break;

        case "sticker":
        objPrice = 1;
        break;
}
objPriceTotal += objPrice;
}



if(budget >= objPriceTotal) {
    let moneyLeft = budget - objPriceTotal;
    console.log(`You bought ${objCount} items and left with ${moneyLeft} lv.`);
} else {
    let moneyNeeded = objPriceTotal - budget;
    console.log(`Not enough money, you need ${moneyNeeded} more lv.`);
}


}
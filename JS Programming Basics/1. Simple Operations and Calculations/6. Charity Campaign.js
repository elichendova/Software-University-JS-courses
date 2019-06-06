function solve(input) {
    let DaysCount = Number(input.shift());
    let BakersCount = Number(input.shift());
    let CakesCount = Number(input.shift());
    let WafflesCount = Number(input.shift());
    let PancakesCount = Number(input.shift());
    let CakePrice = 45;
    let WafflePrice = 5.80;
    let PancakePrice = 3.20;
    let CakePriceTotal = CakesCount * CakePrice;
    let WafflePriceTotal = WafflesCount * WafflePrice;
    let PancakePriceTotal = PancakesCount * PancakePrice;
    let DayMoney = (CakePriceTotal + WafflePriceTotal + PancakePriceTotal) * BakersCount;
    let Income = DaysCount * DayMoney;
    let TotalMoney = Income - (Income / 8);

console.log(TotalMoney.toFixed(2));

}
function solve(input) {
    let WhiskeyPrice = Number(input.shift());
    let BeerCount = Number(input.shift());
    let WineCount = Number(input.shift());
    let RakiaCount = Number(input.shift());
    let WhiskeyCount = Number(input.shift());
    let RakiaPrice = WhiskeyPrice / 2;
    let RakiaTotal = RakiaPrice * RakiaCount;
    let WinePrice = (RakiaPrice - (0.4 * RakiaPrice));
    let WineTotal = WinePrice * WineCount;
    let BeerPrice = (RakiaPrice - (0.8 * RakiaPrice));
    let BeerTotal = BeerPrice * BeerCount;
let WhiskeyPriceTotal = WhiskeyPrice * WhiskeyCount;

let TotalPrice = WhiskeyPriceTotal + BeerTotal + RakiaTotal + WineTotal;
    
    console.log(TotalPrice.toFixed(2));

}

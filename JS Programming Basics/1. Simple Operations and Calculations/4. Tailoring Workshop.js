function solve(input) {
    let TablesCount = Number(input.shift());
    let TablesLength = Number(input.shift());
    let TablesWidth = Number(input.shift());
    let RectCloth = (TablesLength + 0.60) * (TablesWidth + 0.60);
    let SqCloth = (TablesLength / 2) * (TablesLength / 2);
    let RectClothTotal = RectCloth * TablesCount;
    let SqClothTotal = SqCloth * TablesCount;
    let totalPriceUSD = (RectClothTotal * 7) + (SqClothTotal * 9);
    let totalPriceBGN = totalPriceUSD * 1.85;

    console.log(`${totalPriceUSD.toFixed(2)} USD`);
    console.log(`${totalPriceBGN.toFixed(2)} BGN`);

}
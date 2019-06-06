function solve(input) {
    let sectors = Number(input.shift());
    let StadiumCapacity = Number(input.shift());
    let ticketPrice = Number(input.shift());
    let totalIncome = ticketPrice * StadiumCapacity;
    let sectorIncome = totalIncome / sectors;
    let moneyCharity = (totalIncome - (0.75 * sectorIncome))/ 8;

    console.log(`Total income - ${totalIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${moneyCharity.toFixed(2)} BGN`);
}
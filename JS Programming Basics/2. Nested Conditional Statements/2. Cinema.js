function solve(input) {
    let ticketType = input.shift();
    let rowsCount = Number(input.shift());
    let columnsCount = Number(input.shift());
    let totalSeats = rowsCount * columnsCount;
    let ticketCost = 0;
    let totalCost = 0;
    let result = ""; // .toFixed(2)

    if (ticketType === "Premiere") {
        ticketCost = 12;
        totalCost = totalSeats * ticketCost;
        result = totalCost;
    }
    else if (ticketType === "Normal") {
        ticketCost = 7.50;
        totalCost = totalSeats * ticketCost;
        result = totalCost;
    } else if (ticketType === "Discount") {
        ticketCost = 5;
        totalCost = totalSeats * ticketCost;
        result = totalCost;
    }
    console.log(`${result.toFixed(2)} leva`);
}
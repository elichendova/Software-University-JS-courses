function solve(input) {
    let month = input.shift();
    let sleepCount = Number(input.shift());
    let ApartmentPrice = 0;
    let StudioPrice = 0;
    let ApartmentPriceTotal = 0;
    let StudioPriceTotal =  0;
    let result = "";

if (month === "May" || month === "October") {
    StudioPrice = 50;
    ApartmentPrice = 65;
    if (sleepCount > 7 && sleepCount < 14) {
        StudioPrice -= (StudioPrice * 0.05);
    } else if (sleepCount > 14) {
        StudioPrice -= (StudioPrice * 0.30);
    }
} else if (month === "June" || month === "September") {
    StudioPrice = 75.20;
    ApartmentPrice = 68.70;
    if (sleepCount > 14) {
        StudioPrice -= (StudioPrice * 0.20);
    }
} else if (month === "July" || month === "August") {
    StudioPrice = 76;
    ApartmentPrice = 77;
}
if (sleepCount >= 15) {
    ApartmentPrice -= (ApartmentPrice * 0.10);
}

ApartmentPriceTotal = sleepCount * ApartmentPrice;
StudioPriceTotal =  sleepCount * StudioPrice;
result = `Apartment: ${ApartmentPriceTotal.toFixed(2)} lv.\nStudio: ${StudioPriceTotal.toFixed(2)} lv.`;

console.log(result);
}

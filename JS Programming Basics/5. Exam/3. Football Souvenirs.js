function solve(input) {
    let isTeamValid = true;
    let souvenirValid = true;
    let team = input.shift();
    let souvenirType = input.shift();
    let souvenirCount = Number(input.shift());
    let souvenirPrice = 0;




    if (team === "Argentina") {
        
        switch (souvenirType) {
            case "flags":
                souvenirPrice = 3.25;
                break;
            case "caps":
                souvenirPrice = 7.20;
                break;
            case "posters":
                souvenirPrice = 5.10;
                break;
            case "stickers":
                souvenirPrice = 1.25;
                break;

            default:
                souvenirValid = false;
                break;
        }
    } else if (team === "Brazil") {
        switch (souvenirType) {
            case "flags":
                souvenirPrice = 4.20;
                break;
            case "caps":
                souvenirPrice = 8.50;
                break;
            case "posters":
                souvenirPrice = 5.35;
                break;
            case "stickers":
                souvenirPrice = 1.20;
                break;

            default:
                souvenirValid = false;
                break;
        }
    } else if (team === "Croatia") {
        
        switch (souvenirType) {
            case "flags":
                souvenirPrice = 2.75;
                break;
            case "caps":
                souvenirPrice = 6.90;
                break;
            case "posters":
                souvenirPrice = 4.95;
                break;
            case "stickers":
                souvenirPrice = 1.10;
                break;

            default:
                souvenirValid = false;
                break;
        }
    } else if (team === "Denmark") {
        
        switch (souvenirType) {
            case "flags":
                souvenirPrice = 3.10;
                break;
            case "caps":
                souvenirPrice = 6.50;
                break;
            case "posters":
                souvenirPrice = 4.80;
                break;
            case "stickers":
                souvenirPrice = 0.90;
                break;

            default:
                souvenirValid = false;
                break;
        }
    } else {
        isTeamValid = false;
    }

    let souvenirPriceTotal = souvenirPrice * souvenirCount;

    if (souvenirValid && isTeamValid) {
        console.log(`Pepi bought ${souvenirCount} ${souvenirType} of ${team} for ${souvenirPriceTotal.toFixed(2)} lv.`);
    } else if (!souvenirValid && isTeamValid ) {
        console.log("Invalid stock!");
    } else if (souvenirValid && !isTeamValid) {
        console.log("Invalid country!");
    }
}
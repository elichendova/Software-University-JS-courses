function solve(input) {
    let degrees = Number(input.shift());
    let time = input.shift();
    let clothes = "";
    let shoes = '';
    let result = "";

    if (degrees <= 18 && degrees >= 10) {
        switch (time) {
            case "Morning":
                clothes = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
            case "Evening":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degrees <= 24 && degrees >= 18) {
        switch (time) {
            case "Morning":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                clothes = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (degrees >= 25) {
        switch (time) {
            case "Morning":
                clothes = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                clothes = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                clothes = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }

    console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`);

}
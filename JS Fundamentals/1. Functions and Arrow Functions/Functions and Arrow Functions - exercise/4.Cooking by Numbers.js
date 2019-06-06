function cookingByNumbers(input) {
let num = Number(input[0]);
let chop = (num) => num/2;
let dice = (num) => Math.sqrt(num); 
let spice = (num) => num + 1;
let bake = (num) => num * 3;
let fillet = (num) => num -= 0.2*num;


    for (let i = 1; i < input.length; i++) {
    let operation = input[i];
    switch (operation) {
        case "chop":
        num = chop(num);
        console.log(num);
        continue;

        case "dice":
        num = dice(num);
        console.log(num);
        continue;

        case "spice":
        num = spice(num);
        console.log(num);
        continue;
        
        case "bake":
        num = bake(num);
        console.log(num);
        continue;

        case "fillet":
        num = fillet(num);
        console.log(num);
        continue;
        
    }
}
}
function solve(input) {
    let name = input.shift();
    let budget = Number(input.shift());
    let beersCount = Number(input.shift());
    let snacksCount = Number(input.shift());
    let totalBeersCount = beersCount * 1.20;
    let totalSnacksCount = Math.ceil(  snacksCount * (0.45 * totalBeersCount) );
    let totalCount = (totalSnacksCount + totalBeersCount).toFixed(2);

    if (totalCount <= budget ) {
       console.log( `${name} bought a snack and has ${(budget - totalCount).toFixed(2)} leva left.`);
    } else {
        console.log( `${name} needs ${(totalCount - budget).toFixed(2)} more leva!`);
    }

}
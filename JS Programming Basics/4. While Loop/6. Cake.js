function solve(input) {
    let cakeWidth = Number(input.shift());
    let cakeLength = Number(input.shift());
    let cakeSize = cakeWidth * cakeLength;
    let cakePartsTotal = 0;

    while (cakePartsTotal < cakeSize) {
        let cakePartsCurrent = input.shift();

        if (cakePartsCurrent === "STOP") {
            let leftPisces = cakeSize - cakePartsTotal;
            console.log(`${leftPisces} pieces are left.`);
            break;
        }
        cakePartsTotal += Number(cakePartsCurrent);
        if (cakePartsTotal > cakeSize) {
            let neededPisces = cakePartsTotal - cakeSize;
            console.log(`No more cake left! You need ${neededPisces} pieces more.`);
        } 
    }
    
}
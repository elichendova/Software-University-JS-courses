function solve(input) {
    let n = Number(input.shift(0));
    let initalSum = 0;
    let initialDiff = 0;
    let sum = 0;
    let equalValue = false;
    let diff = 0;
    let maxDiff = 0;
   

    for (let i = 0; i < n; i++) {
        let number = Number(input.shift(i));
        let nextNumber = Number(input.shift(i+1));
        sum = number + nextNumber;

        if(i === 0) {
            initalSum = sum;
        }

        if(sum === initalSum) {
            equalValue = true;
        } else {
            equalValue = false;
            
        }

        if(sum > initalSum){
            diff = sum - initalSum;
        } else if (sum < initalSum) {
            diff = initalSum - sum;
        } 

        if(diff > initialDiff) {
            maxDiff = diff;
        }

        initalSum = sum;


    }

    if (equalValue){
    console.log(`Yes, value=${sum}`);
    }
    else if (!equalValue){
    console.log(`No, maxdiff=${maxDiff}`);
    }
}
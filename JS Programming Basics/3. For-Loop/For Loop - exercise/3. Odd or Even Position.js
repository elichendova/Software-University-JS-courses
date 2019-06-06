function solve(input) {
    let n = Number(input[0]);
    let oddMinInital = false;
    let oddMaxInitial = false;
    let evenMinInital = false;
    let evenMaxInitial = false;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddSum = 0;
    let evenSum = 0;


    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (i % 2 === 0) {
            evenSum += num;
            if (num > evenMax) {
                evenMax = num;
                evenMaxInitial = true;
            }
            if (num < evenMin) {
                evenMin = num;
                evenMinInital = true;
            }

        } else {
            oddSum += num;
            if (num > oddMax) {
                oddMax = num;
                oddMaxInitial = true;
            }
            if (num < oddMin) {
                oddMin = num;
                oddMinInital = true;
            }
        }

    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMinInital) {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    } else {
        console.log("OddMin=No,");
    }

    if (oddMaxInitial) {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log("OddMax=No,");
    }


    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMinInital) {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    } else {
        console.log("EvenMin=No,");
    }

    if (evenMaxInitial) {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else {
        console.log("EvenMax=No");
    }

}
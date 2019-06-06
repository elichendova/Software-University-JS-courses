function solve(input) {
    let n = Number(input.shift(0));
    let moduleDiv2Counter = 0;
    let moduleDiv3Counter = 0;
    let moduleDiv4Counter = 0;


    for (let i = 0; i < n; i++) {
        let number = Number(input[i]);
        if (number % 2 === 0) {
            moduleDiv2Counter++;
        } if (number % 3 === 0) {
            moduleDiv3Counter++;
        } if (number % 4 === 0) {
            moduleDiv4Counter++;
        }
    }
    console.log((moduleDiv2Counter/n * 100).toFixed(2)+"%");
    console.log((moduleDiv3Counter/n * 100).toFixed(2)+"%");
    console.log((moduleDiv4Counter/n * 100).toFixed(2)+"%");
}
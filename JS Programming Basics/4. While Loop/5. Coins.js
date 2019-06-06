function solve(input) {
    let inputMoney = Number(input.shift());
    let counter = 0;

    while (inputMoney > 0) {
        if (inputMoney - 2 >= 0) {
            inputMoney = Number(inputMoney- 2).toFixed(2);
            counter++;
        } else if (inputMoney - 1 >= 0) {
            inputMoney = Number(inputMoney- 1).toFixed(2);
            counter++;
        } else if (inputMoney - 0.50 >= 0) {
            inputMoney = Number(inputMoney- 0.50).toFixed(2);
            counter++;
        } else if (inputMoney - 0.20 >= 0) {
            inputMoney = Number(inputMoney- 0.20).toFixed(2);
            counter++;
        } else if (inputMoney - 0.10 >= 0) {
            inputMoney = Number(inputMoney- 0.10).toFixed(2);
            counter++;
        } else if (inputMoney - 0.05 >= 0) {
            inputMoney = Number(inputMoney- 0.05).toFixed(2);
            counter++;
        } else if (inputMoney - 0.02 >= 0) {
            inputMoney = Number(inputMoney- 0.02).toFixed(2);
            counter++;
        } else if (inputMoney - 0.01 >= 0) {
            inputMoney = Number(inputMoney- 0.01).toFixed(2);
            counter++;
        }
    }
    console.log(counter);
}
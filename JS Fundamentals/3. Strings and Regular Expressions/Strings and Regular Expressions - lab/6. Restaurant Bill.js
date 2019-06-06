function restaurantBill(input) {
    let prices = [];
    let products = [];
    let sum = 0;
    for (let value in input) {
        if (value % 2) {
            prices.push(+input[value]);
        } else {
            products.push(input[value]);
        }
    }
    sum = prices.reduce((a, b) => a + b, 0);

    return (`You purchased ${products.join(", ")} for a total sum of ${sum}`);
}
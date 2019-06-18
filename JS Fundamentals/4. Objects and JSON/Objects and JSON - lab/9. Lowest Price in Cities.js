function lowestPriceInCities(input) {
    input.forEach(element => {
        let [city, product, price] = element.split(" | ");
        console.log (city);
        console.log (product);
        console.log (price);
    });
    
    return input;
}
console.log(lowestPriceInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"
]
));
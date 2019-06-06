function aggregate(input) {

    let values = [];
    let citiesTemp = [];
    let cities = [];
    input.forEach(element => {
        values.push(Number(element.replace(/\D/g, "")));
        citiesTemp.push(element.replace(/\d/g, "").replace(/\|/g, ""));
    });

    citiesTemp.forEach(city => {
        cities.push(city.trim());
    });
    console.log(cities.join(", "));
    console.log(values.reduce((a, b) => a + b, 0))
}

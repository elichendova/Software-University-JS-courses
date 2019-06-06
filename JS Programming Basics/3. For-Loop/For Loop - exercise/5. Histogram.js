function solve(input) {
    let n = Number(input.shift(0));
    let smallerThan200Counter = 0;
    let between200And399Counter = 0;
    let between400And599Counter = 0;
    let between600And799Counter = 0;
    let largerThan800 = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift(i));
        if (num < 200) {
            smallerThan200Counter++;
        } else if (num >= 200 && num <= 399) {
            between200And399Counter++;
        } else if (num >= 400 && num <= 599) {
            between400And599Counter++;
        } else if (num >= 600 && num <= 799) {
            between600And799Counter++;
        } else if (num >= 800) {
            largerThan800++;
        }
}

console.log((smallerThan200Counter / n * 100).toFixed(2)+"%");
console.log((between200And399Counter / n * 100).toFixed(2)+"%");
console.log((between400And599Counter / n * 100).toFixed(2)+"%");
console.log((between600And799Counter / n * 100).toFixed(2)+"%");
console.log((largerThan800 / n * 100).toFixed(2)+"%"); 
}
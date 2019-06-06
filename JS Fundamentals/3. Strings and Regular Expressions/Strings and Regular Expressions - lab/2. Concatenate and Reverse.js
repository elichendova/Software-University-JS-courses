function concat(input) {
    let res= [];
input.forEach(element => {
    res.unshift(element.split("").reverse().join(""));
});
return res.join("");
}
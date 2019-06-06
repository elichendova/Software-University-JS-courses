function evenPositionElement(num){
let evenPositions = [];
for (let index in num ) {

if(index % 2 === 0) {
    evenPositions.push(num[index]);
}
}
return evenPositions.join(" ");
}
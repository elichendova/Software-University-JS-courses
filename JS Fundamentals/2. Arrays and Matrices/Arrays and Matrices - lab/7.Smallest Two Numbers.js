function smallestTwoNums(input){
let result = [];
let minIntegerFirst = Math.min(...input);
input.splice(input.indexOf(minIntegerFirst),1);
let minIntegerSecond = Math.min(...input);
result = minIntegerFirst.toString() + " " + minIntegerSecond.toString();
return result;
}
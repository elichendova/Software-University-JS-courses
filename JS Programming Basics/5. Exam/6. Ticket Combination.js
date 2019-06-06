function solve(input) {
let combinationNum = Number(input.shift());
let code = "";
let counter = 0;
let letterB = "B".charCodeAt(0);
let letterL = "L".charCodeAt(0);
let letterFSmall = "f".charCodeAt(0);
let letterASmall = "a".charCodeAt(0);
let letterA = "A".charCodeAt(0);
let letterC = "C".charCodeAt(0);
let firstSymbolFinal = "";
let secondSymbolFinal = "";
let thirdSymbolFinal = "";
let result = "";
let forthSymbolFinal = 0;
let fifthSymbolFinal = 0;
let resultSum = 0;


for (let firstSymbol = letterB; firstSymbol <= letterL; firstSymbol++) {
    for (let secondSymbol = letterFSmall; secondSymbol >= letterASmall; secondSymbol--) {
        for (let thirdSymbol = letterA; thirdSymbol <= letterC; thirdSymbol++) {
            for (let forthSymbol = 1; forthSymbol <= 10; forthSymbol++) {
                for (let fifthSymbol = 10; fifthSymbol >= 1; fifthSymbol--) {
                   if(firstSymbol % 2 === 0) {
                    firstSymbolFinal = String.fromCharCode(firstSymbol);
                    secondSymbolFinal = String.fromCharCode(secondSymbol);
                    thirdSymbolFinal = String.fromCharCode(thirdSymbol);
                    forthSymbolFinal = forthSymbol;
                    fifthSymbolFinal = fifthSymbol;
                    counter ++;

                    code = firstSymbolFinal + "" + secondSymbolFinal + "" + thirdSymbolFinal + "" + forthSymbolFinal + "" + fifthSymbolFinal;

                    if(counter === combinationNum){
                        result = code;
                        resultSum = firstSymbol + secondSymbol + thirdSymbol + forthSymbol + fifthSymbol;
                        continue;
                    }

                    }
                }   
            }
        }
    }

}

console.log(`Ticket combination: ${result}`);
console.log(`Prize: ${resultSum} lv.`);

}
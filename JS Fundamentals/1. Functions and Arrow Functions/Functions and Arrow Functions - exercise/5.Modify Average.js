function solve(number){
    let num = JSON.stringify(number);
    let splitNum = num.split("");
    let sum = 0;
    for(let i = 0; i < splitNum.length; i++) {
        sum+= +splitNum[i];
    }
    if( sum / splitNum.length <= 5) {
        do {
            number = number + "9";
            sum+= 9;
            splitNum.length++;
        } while (sum/splitNum.length <=5)
        
    }
    
    console.log(number);
    
}  
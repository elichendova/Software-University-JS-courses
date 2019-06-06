function solve(input) {
    let n = Number(input.shift(0));
    let salary = Number(input.shift(0));
    let facebookFine = 150;
    let instagramFine = 100;
    let redditFine = 50;
    let fineCounter = 0;


    for (let i = 0; i < n; i++) {
        let tab = input[i];
        if(tab === "Facebook") {
            fineCounter += facebookFine;
        } else if(tab === "Instagram") {
            fineCounter += instagramFine;
        } else if(tab === "Reddit") {
            fineCounter += redditFine;
        }
        if (fineCounter >= salary) {
            console.log("You have lost your salary.");
            break;
        }
    }
   if (fineCounter < salary){
    console.log(salary - fineCounter);
   }
}
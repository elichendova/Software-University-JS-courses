function UpperCase(input) {
    let output = "";
    let result = [];
    let reg1 =  /[A-Z ]+/;
    let lettersOnly = true;
    let inputUpper = input.toUpperCase();
    
         for (let i = 0; i < inputUpper.length; i++) {
            lettersOnly = reg1.test(inputUpper[i]);
            if(lettersOnly) {
                output += inputUpper[i];
            } 
        }
        let array = output.split(" ");

        for (let item of array) {
            result.push(item);
        }


    return result.join(", ");
}
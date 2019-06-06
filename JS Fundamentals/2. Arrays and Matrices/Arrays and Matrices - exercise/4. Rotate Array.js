function rotateArr(input) {
    let rotateCount = input.pop();

   for (let i = 0; i < rotateCount % input.length; i++) {
       let lastNumber = input.pop();
       input.unshift(lastNumber);       
   }
   return input.join(" ");
}
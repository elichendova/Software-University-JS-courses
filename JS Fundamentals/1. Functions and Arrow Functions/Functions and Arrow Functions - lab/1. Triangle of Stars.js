function solve (num) {
for (let i = 1; i < num; i++) {
    console.log("*".repeat(i));  
}
for (let j = num; j >= 1; j--) {
    console.log("*".repeat(j)); 
}
}
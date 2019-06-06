function treasureLocator(input) {

function Tuvalu(x,y) {
   if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
       return true;
   }
}

function Tokelau(x,y) {
    if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
        return true;
    }
 }

 function Samoa(x,y) {
    if (x >= 5 && x <=7 && y >= 3 && y <= 6) {
        return true;
    }
 }

 function Tonga(x,y) {
    if (x >= 0 && x <=2 && y >= 6 && y <= 8) {
        return true;
    }
 }

 function Cook(x,y) {
    if (x >= 4 && x <=9 && y >= 7 && y <= 8) {
        return true;
    }
 }

for (let i = 0; i < input.length; i+=2) {
    x = input[i];
    y = input[i+1];

    if (Tuvalu(x,y)) {
        console.log("Tuvalu");
    } else if (Tokelau(x,y)) {
        console.log("Tokelau");
    } else if (Samoa(x,y)) {
        console.log("Samoa");
    } else if (Tonga(x,y)) {
        console.log("Tonga");
    } else if (Cook(x,y)) {
        console.log("Cook");
    } else {
        console.log("On the bottom of the ocean");
    }
}
}
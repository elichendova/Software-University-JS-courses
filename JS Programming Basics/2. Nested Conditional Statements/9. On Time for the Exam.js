function solve(input) {
    let examHour = Number(input.shift());
    let examMinute = Number(input.shift());
    let arrivalHour = Number(input.shift());
    let arrivalMinute = Number(input.shift());

    let arrivalTime = (arrivalHour * 60) + arrivalMinute;
    let examTime = (examHour * 60) + examMinute;

    if (arrivalTime === examTime) {
        console.log("On time");
    }

    else if (arrivalTime > examTime) {
        console.log("Late");
        if (arrivalTime - examTime < 60) {
            console.log(`${arrivalTime - examTime} minutes after the start`);
        } else {
            if (Math.abs(arrivalMinute - examMinute) < 10) {
                console.log(`${arrivalHour - examHour}:0${arrivalMinute - examMinute} hours after the start`);
            } else {
            console.log(`${arrivalHour - examHour}:${arrivalMinute - examMinute} hours after the start`);
            }
        }

    }
    else if (arrivalTime < examTime) {
        if (examTime - arrivalTime <= 30) {
            console.log("On time");
            console.log(`${examTime - arrivalTime} minutes before the start`);

        } else if (examTime - arrivalTime > 30 && examTime - arrivalTime < 60) {
            console.log("Early");
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } else {
            console.log("Early");
            if (examMinute - arrivalMinute < 10) {
                console.log(`${examHour - arrivalHour}:0${examMinute - arrivalMinute} hours before the start`);
            } else {
            console.log(`${examHour - arrivalHour}:${examMinute - arrivalMinute} hours before the start`);
            }
        }

    }

}
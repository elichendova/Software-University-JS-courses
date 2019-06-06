function solve(input) {
    let yearType = input.shift();
    let holidaysCount = Number(input.shift());
    let weekendsInHomeTown = Number(input.shift());


    let weekendsInSofia = 48 - weekendsInHomeTown;
    let totalTimeSofiaPlaying = weekendsInSofia - (weekendsInSofia * 1/4);
    let playTime = totalTimeSofiaPlaying + weekendsInHomeTown + (holidaysCount * 2/3);

    if (yearType === "leap") {
        playTime = playTime + (playTime * 0.15);
    }

 
    console.log(Math.floor(playTime));
}

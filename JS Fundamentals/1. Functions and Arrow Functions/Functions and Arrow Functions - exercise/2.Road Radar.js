function radar(input) {
    let speed = input[0];
    let area = input[1];


    function getLimit(area) {
        switch (area) {
            case "motorway": return 130;
            case "interstate": return 90;
            case "city": return 50;
            case "residential": return 20;
        }
    }


        if (speed > getLimit(area) && speed <= getLimit(area) + 20) {
            return "speeding";
        } else if (speed > getLimit(area) + 20 && speed <= getLimit(area) + 40) {
            return "excessive speeding";
        } else if (speed > getLimit(area) + 40) {
            return "reckless driving";
        }


    }
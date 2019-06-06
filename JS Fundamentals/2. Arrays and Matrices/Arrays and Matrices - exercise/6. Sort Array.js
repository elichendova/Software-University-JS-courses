function sortArray(input) {
    function compare(a, b) {
        if (a.length > b.length) {
            return 1;
        }
        else if (a.length < b.length) {
            return -1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    return (input.sort(compare)).join("\n");
}
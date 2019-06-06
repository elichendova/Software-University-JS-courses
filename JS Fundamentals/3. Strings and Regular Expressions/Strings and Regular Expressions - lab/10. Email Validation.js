function emailVerification(input) {
    let validityDef = false;
    if (input.match(/@/g).length === 1) {
        let [username, domain] = input.split("@");
        let invalidCharInUsername = /[^A-Za-z0-9]+/g;

        if (!(invalidCharInUsername.test(username))) {
            if (domain.match(/\./g).length === 1) {
                let [firstpart, secondpart] = domain.split(".");
                let invalidString = /[^a-z]+/g;
                if (!(invalidString.test(firstpart)) && !(invalidString.test(secondpart))) {
                    validityDef = true;
                }
            }
        }
    }
    if (validityDef) {
        return "Valid";
    } else {
        return "Invalid";
    }
}
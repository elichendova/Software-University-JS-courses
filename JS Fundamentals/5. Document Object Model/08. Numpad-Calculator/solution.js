function solve() {
    let keys = document.querySelectorAll(".keys button");
    let clearBtn = document.querySelector("button.clear");

    clearBtn.addEventListener("click", () => {
        document.querySelector("#expressionOutput").innerHTML = "";
        document.querySelector("#resultOutput").innerHTML = "";
    })

    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", (e) => {
            let keyValue = e.target.value;
            if (/\d/.test(keyValue)) {
                document.querySelector("#expressionOutput").innerHTML += +keyValue;
            } else {
                switch (keyValue) {
                    default:
                        document.querySelector("#expressionOutput").innerHTML += " " + keyValue + " ";
                        break;
                    case ".":
                        document.querySelector("#expressionOutput").innerHTML += keyValue;
                        break;
                    case "=":
                        document.querySelector("#expressionOutput").innerHTML;
                        let result = document.querySelector("#expressionOutput").innerHTML.split(" ");
                        let resultRefined = [];
                        for (let j = 0; j < result.length; j++) {
                            if (/\d/.test(result[j])) {
                                resultRefined.push(+result[j]);
                            } else {
                                resultRefined.push(result[j]);
                            }
                        }
                        let validNumber = /(\d+\.\d+)|(\d+)/;
                        let validSign = /\+|\-|\*|\//;
                        if (validNumber.test(resultRefined[0]) && validSign.test(resultRefined[1]) && validNumber.test(resultRefined[2])) {
                            switch (resultRefined[1]) {
                                case "+":
                                    document.querySelector("#resultOutput").innerHTML = (resultRefined[0] + resultRefined[2]);
                                    break;
                                case "-":
                                    document.querySelector("#resultOutput").innerHTML = (resultRefined[0] - resultRefined[2]);
                                    break;
                                case "/":
                                    document.querySelector("#resultOutput").innerHTML = (resultRefined[0] / resultRefined[2]);
                                    break;
                                case "*":
                                    document.querySelector("#resultOutput").innerHTML = (resultRefined[0] * resultRefined[2]);
                                    break;
                            }
                        } else {
                            document.querySelector("#resultOutput").innerHTML = "NaN";
                        }
                }
            }
        });
    }
}
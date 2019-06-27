function solve() {
    let selectDropDown = document.getElementsByTagName("select")[1];
    let binaryOptn = document.createElement("option");
    let hexadecimalOptn = document.createElement("option");
    binaryOptn.text = "Binary";
    binaryOptn.value = "binary";
    hexadecimalOptn.text = "Hexadecimal";
    hexadecimalOptn.value = "hexadecimal";
    selectDropDown.add(binaryOptn);
    selectDropDown.add(hexadecimalOptn);

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", convert);
    function convert () {
        let input = +document.getElementById("input").value;
        let convertBinary = input.toString(2);
        let convertHexadecimal = ("0"+(input.toString(16))).slice(-2).toUpperCase();
        let selectedValue = document.getElementById("selectMenuTo").value;

        if (selectedValue === "binary") {
            document.getElementById("result").value = convertBinary;
            document.getElementsByTagName("option")[1].value = "binary";
            document.getElementsByTagName("option")[1].text = "Binary";
        }
        else {
            document.getElementById("result").value = convertHexadecimal;
            document.getElementsByTagName("option")[1].value = "hexadecimal";
            document.getElementsByTagName("option")[1].text = "Hexadecimal";
        }
    }
}



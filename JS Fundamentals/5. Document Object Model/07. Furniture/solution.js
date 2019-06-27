function solve() {
    let boughtFurniture = [];
    let totalPrice = [];
    let averageDeco = [];
    let generateBtn = document.querySelectorAll("button")[0];
    let buyBtn = document.querySelectorAll("button")[1];
    generateBtn.addEventListener("click", generate);
    buyBtn.addEventListener("click", buy);

    function generate() {
        let inputVal = document.querySelectorAll("textarea")[0].value;
        let collection = JSON.parse(inputVal);

        for (let i = 0; i < collection.length; i++) {
            let row = document.querySelector("tbody tr").cloneNode(true);
            let table = document.querySelector("tbody");
            table.appendChild(row);
            document.querySelectorAll("tr")[i + 2].children[0].children[0].src = collection[i].img;
            document.querySelectorAll("tr")[i + 2].children[1].children[0].innerHTML = collection[i].name;
            document.querySelectorAll("tr")[i + 2].children[2].children[0].innerHTML = collection[i].price;
            document.querySelectorAll("tr")[i + 2].children[3].children[0].innerHTML = collection[i].decFactor;
            document.querySelectorAll("tr")[i + 2].children[4].children[0].disabled = false;
        }

        let allInputs = document.querySelectorAll("input");
        allInputs.forEach(input => {
            input.addEventListener("click", (e) => {


                let parent = e.target.parentNode.parentNode;
                let name = parent.children[1].children[0].innerHTML;
                let price = +parent.children[2].children[0].innerHTML;
                let decFactor = +parent.children[3].children[0].innerHTML;


                boughtFurniture.push(name);
                totalPrice.push(price);
                averageDeco.push(decFactor);
            });
        });
        generateBtn.disabled = true;
    }

    function buy() {
        let list = [...new Set(boughtFurniture)];
        let priceResult = totalPrice.reduce((a, b) => a + b, 0);
        let decoResult = (averageDeco.reduce((a, b) => a + b, 0)) / averageDeco.length;
        let result = document.querySelectorAll("textarea")[1];

        result.innerHTML += "Bought furniture: " + list.join(", ") + "\n";
        result.innerHTML += "Total price: " + priceResult.toFixed(2) + "\n";
        result.innerHTML += "Average decoration factor: " + decoResult.toFixed(1);
    }
}
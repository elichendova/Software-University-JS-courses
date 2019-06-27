function solve() {
    let button = document.querySelector("button");
    let listItems = document.querySelectorAll("li");
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].id = alphabet[i];
    }

    button.addEventListener("click", () => {
        let input = document.querySelector("input").value.toLowerCase();
        let firstLetter = input.charAt(0);
        let name = input.charAt(0).toUpperCase() + input.substr(1);

        switch (firstLetter) {
            case "a":
                if (document.querySelector("#A").innerHTML !== "") {
                    document.querySelector("#A").innerHTML += ", " + name;
                } else {
                    document.querySelector("#A").innerHTML = name;
                }
                break;

            case "b":
                if (document.querySelector("#B").innerHTML !== "") {
                    document.querySelector("#B").innerHTML += ", " + name;
                } else {
                    document.querySelector("#B").innerHTML = name;
                }
                break;

            case "c":
                if (document.querySelector("#C").innerHTML !== "") {
                    document.querySelector("#C").innerHTML += ", " + name;
                } else {
                    document.querySelector("#C").innerHTML = name;
                }
                break;

            case "d":
                if (document.querySelector("#D").innerHTML !== "") {
                    document.querySelector("#D").innerHTML += ", " + name;
                } else {
                    document.querySelector("#D").innerHTML = name;
                }
                break;



            case "e":
                if (document.querySelector("#E").innerHTML !== "") {
                    document.querySelector("#E").innerHTML += ", " + name;
                } else {
                    document.querySelector("#E").innerHTML = name;
                }
                break;

            case "f":
                if (document.querySelector("#F").innerHTML !== "") {
                    document.querySelector("#F").innerHTML += ", " + name;
                } else {
                    document.querySelector("#F").innerHTML = name;
                }
                break;

            case "g":
                if (document.querySelector("#G").innerHTML !== "") {
                    document.querySelector("#G").innerHTML += ", " + name;
                } else {
                    document.querySelector("#G").innerHTML = name;
                }
                break;

            case "h":
                if (document.querySelector("#H").innerHTML !== "") {
                    document.querySelector("#H").innerHTML += ", " + name;
                } else {
                    document.querySelector("#H").innerHTML = name;
                }
                break;

            case "i":
                if (document.querySelector("#I").innerHTML !== "") {
                    document.querySelector("#I").innerHTML += ", " + name;
                } else {
                    document.querySelector("#I").innerHTML = name;
                }
                break;

            case "j":
                if (document.querySelector("#J").innerHTML !== "") {
                    document.querySelector("#J").innerHTML += ", " + name;
                } else {
                    document.querySelector("#J").innerHTML = name;
                }
                break;

            case "k":
                if (document.querySelector("#K").innerHTML !== "") {
                    document.querySelector("#K").innerHTML += ", " + name;
                } else {
                    document.querySelector("#K").innerHTML = name;
                }
                break;

            case "l":
                if (document.querySelector("#L").innerHTML !== "") {
                    document.querySelector("#L").innerHTML += ", " + name;
                } else {
                    document.querySelector("#L").innerHTML = name;
                }
                break;

            case "m":
                if (document.querySelector("#M").innerHTML !== "") {
                    document.querySelector("#M").innerHTML += ", " + name;
                } else {
                    document.querySelector("#M").innerHTML = name;
                }
                break;

            case "n":
                if (document.querySelector("#N").innerHTML !== "") {
                    document.querySelector("#N").innerHTML += ", " + name;
                } else {
                    document.querySelector("#N").innerHTML = name;
                }
                break;

            case "o":
                if (document.querySelector("#O").innerHTML !== "") {
                    document.querySelector("#O").innerHTML += ", " + name;
                } else {
                    document.querySelector("#O").innerHTML = name;
                }
                break;

            case "p":
                if (document.querySelector("#P").innerHTML !== "") {
                    document.querySelector("#P").innerHTML += ", " + name;
                } else {
                    document.querySelector("#P").innerHTML = name;
                }
                break;

            case "q":
                if (document.querySelector("#Q").innerHTML !== "") {
                    document.querySelector("#Q").innerHTML += ", " + name;
                } else {
                    document.querySelector("#Q").innerHTML = name;
                }
                break;

            case "r":
                if (document.querySelector("#R").innerHTML !== "") {
                    document.querySelector("#R").innerHTML += ", " + name;
                } else {
                    document.querySelector("#R").innerHTML = name;
                }
                break;

            case "s":
                if (document.querySelector("#S").innerHTML !== "") {
                    document.querySelector("#S").innerHTML += ", " + name;
                } else {
                    document.querySelector("#S").innerHTML = name;
                }
                break;

            case "t":
                if (document.querySelector("#T").innerHTML !== "") {
                    document.querySelector("#T").innerHTML += ", " + name;
                } else {
                    document.querySelector("#T").innerHTML = name;
                }
                break;

            case "u":
                if (document.querySelector("#U").innerHTML !== "") {
                    document.querySelector("#U").innerHTML += ", " + name;
                } else {
                    document.querySelector("#U").innerHTML = name;
                }
                break;

            case "v":
                if (document.querySelector("#V").innerHTML !== "") {
                    document.querySelector("#V").innerHTML += ", " + name;
                } else {
                    document.querySelector("#V").innerHTML = name;
                }
                break;

            case "w":
                if (document.querySelector("#W").innerHTML !== "") {
                    document.querySelector("#W").innerHTML += ", " + name;
                } else {
                    document.querySelector("#W").innerHTML = name;
                }
                break;

            case "x":
                if (document.querySelector("#X").innerHTML !== "") {
                    document.querySelector("#X").innerHTML += ", " + name;
                } else {
                    document.querySelector("#X").innerHTML = name;
                }
                break;

            case "y":
                if (document.querySelector("#Y").innerHTML !== "") {
                    document.querySelector("#Y").innerHTML += ", " + name;
                } else {
                    document.querySelector("#Y").innerHTML = name;
                }
                break;

            case "z":
                if (document.querySelector("#Z").innerHTML !== "") {
                    document.querySelector("#Z").innerHTML += ", " + name;
                } else {
                    document.querySelector("#Z").innerHTML = name;
                }
                break;
        }
    })
}
function solve() {
   let images = document.getElementsByTagName("img");
   let firstSpan = document.getElementById("result").firstElementChild;
   let lastSpan = document.getElementById("result").lastElementChild;
   let history = document.getElementById("history");
   let p1CardIndex = null;
   let p2CardIndex = null;
   let p1CardName = null;
   let p2CardName = null;


   for (let i = 0; i < images.length; i++) {
      images[i].onclick = () => {
         if(firstSpan.innerHTML !== "" && lastSpan.innerHTML !== "") {
            firstSpan.innerHTML = "";
            lastSpan.innerHTML = "";
            }
      images[i].src = "images/whiteCard.jpg";
     if(images[i].parentNode.id === "player1Div") {
      firstSpan.innerHTML = images[i].name;
      p1CardIndex = i;
      p1CardName = images[i].name;
      } else {
      lastSpan.innerHTML = images[i].name;
      p2CardIndex = i;
      p2CardName = images[i].name;
      }
      if(firstSpan.innerHTML !== "" && lastSpan.innerHTML !== "") {
         history.innerHTML += `[${p1CardName} vs ${p2CardName}] `
         if(+firstSpan.innerHTML > +lastSpan.innerHTML) {
            images[p1CardIndex].style.border = "2px solid green";
            images[p2CardIndex].style.border = "2px solid red";
         } else {
            images[p2CardIndex].style.border = "2px solid green";
            images[p1CardIndex].style.border = "2px solid red";
         }
   }

      }
   }

}
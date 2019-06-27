function solve() {
   let btn = document.querySelector("#searchBtn");
   btn.addEventListener("click", solve);
   let input = document.querySelector("#searchField").value;
   let tableCells = document.querySelectorAll("tbody td");
   let tableRows = document.querySelectorAll("tbody tr");
 
   for (let j = 0; j < tableRows.length; j++) {
      tableRows[j].classList.remove("select");
   }

   for (let i = 0; i < tableCells.length; i++) {
      let content = tableCells[i].innerHTML;
      if (content.includes(input) && input !== ""){
         tableCells[i].parentElement.classList.add("select");
         document.querySelector("#searchField").value = "";
      }
   }
}



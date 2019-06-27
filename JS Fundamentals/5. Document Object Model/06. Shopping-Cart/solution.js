function solve() {
   let productsAll = document.querySelectorAll(".add-product");
   let textarea = document.querySelector("textarea");
   let checkoutBtn = document.querySelectorAll(".checkout")[0];
   let btnsAll = document.querySelectorAll("button");
   let productsSelected = [];

   for (let i = 0; i < productsAll.length; i++) {
      productsAll[i].addEventListener("click", addToCart);
   }

   function addToCart(event) {
      let product = event.target.parentNode.parentNode;
      let name = product.children[1].children[0].innerHTML;
      let price = +product.children[3].innerHTML;
      let productSelected = {
         "Name": name,
         "Price": price
      }
      productsSelected.push(productSelected);
      let addedProduct = `Added ${productSelected.Name} for ${productSelected.Price.toFixed(2)} to the cart.\n`;
      textarea.value += addedProduct;
   }

   checkoutBtn.addEventListener("click", () => {
      let listNoFilter = productsSelected.map(p => p.Name);
      let list = [...new Set(listNoFilter)];
      let totalPrice = productsSelected.map(x => x.Price).reduce((a, b) => { return a + b }, 0).toFixed(2);
      textarea.value += `You bought ${list.join(", ")} for ${totalPrice}.`;

      for (let j = 0; j < btnsAll.length; j++) {
         btnsAll[j].disabled = true;

      }
   })
}


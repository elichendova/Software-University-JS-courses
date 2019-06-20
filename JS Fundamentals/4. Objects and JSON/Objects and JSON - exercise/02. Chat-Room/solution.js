function solve() {
   let button = document.getElementById("send");
   button.addEventListener("click", solve);
   let input = document.getElementById("chat_input").value;
   let chatMsg = document.getElementById("chat_messages");
   let currentMsg = document.createElement("div");

   currentMsg.innerHTML = input;
   if (currentMsg.innerHTML !== "") {
      currentMsg.setAttribute("class", "message my-message");
      chatMsg.appendChild(currentMsg);
      document.getElementById("chat_input").value = "";
   }
}


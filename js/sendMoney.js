document
  .getElementById("send-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amounts = document.getElementById('send-amount').value
    const amount= parseFloat(amounts)
    const pins = document.getElementById("pin").value
    const pin = parseFloat(pins)
    const balances = document.getElementById("main-balance").innerText;
    const balance = parseFloat(balances);
    const number = document.getElementById("number").value;
    if (amount > balance) {
      alert("Balance Low");
      return;
    }
    if (pin && amount) {
      if (pin === 1325) {
        const sum = balance - amount;
        document.getElementById("main-balance").innerText = sum;
        alert("Transfer Successfull");

        // History
        const addHistory = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex items-center gap-5 bg-blue-50 px-3 py-4 rounded-lg mb-4">
                    <img class="p-2 rounded-full bg-white" src="assets/purse1.png" alt="">
                    <h1 class="">Send Moeny ${amount} Tk Successfully To ${number} </h1>
                </div>
            `;
        addHistory.appendChild(div);
      } else {
        alert("Pin Wrong");
      }
    } else {
      alert("Enter Value");
    }
  });

// Transaction Toggle 
document.getElementById('transaction-history').style.display = 'none'
document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    document.getElementById('add-money').style.display='none'
    document.getElementById('cash-out').style.display='none'
    document.getElementById('transaction-history').style.display='block'

  });
// For Logout 
document.getElementById('log-out').addEventListener('focus', function(){
    window.location.href ="./index.html"
})
// Add Money 
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    
    const pins = document.getElementById("pin").value
    const pin = parseFloat(pins)
    const amounts = document.getElementById('add-amount').value
    const amount= parseFloat(amounts)
    const balances = document.getElementById('main-balance').innerText
    const balance =parseFloat(balances)
    const number = document.getElementById('account-number').value
    const selectedBank = document.getElementById('all-bank').value
    if(amount && pin){
        if(number.length = 11){
            if(pin === 1325){
                const sum = amount + balance
                document.getElementById('main-balance').innerText= sum
                alert('Money Added Successfully')
// History 
                const addHistory = document.getElementById('transaction-container')
                const div = document.createElement('div')
                div.innerHTML = `
                <div class="flex items-center gap-5 bg-blue-50 px-3 py-4 rounded-lg mb-4">
                        <img class="p-2 rounded-full bg-white" src="assets/purse1.png" alt="">
                        <h1 class="">Added Successfully ${amount} Tk from ${selectedBank} ${number} </h1>
                    </div>
                `
                addHistory.appendChild(div)

            }
            else{
                alert("wrong Pin")
            }
        }
        else{
            alert('Number Wrong')
        }
        
     }
    else{
        alert("Enter Value")
    }
})

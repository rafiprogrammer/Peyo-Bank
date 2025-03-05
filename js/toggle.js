// default Box 
document.getElementById('cash-out').style.display = 'none'

// Cash Out Function
document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display='block'
    document.getElementById('cash-out').style.display='none'
    document.getElementById('transaction-history').style.display='none'
    document.getElementById('send-money').style.display='none'

})
document.getElementById('cash-out-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display='none'
    document.getElementById('cash-out').style.display='block'
    document.getElementById('transaction-history').style.display='none'
    document.getElementById('send-money').style.display='none'

})


// Send Money Toggle 
document.getElementById('send-money').style.display = 'none'
// Send Money Function 
document.getElementById('send-money-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display='none'
    document.getElementById('cash-out').style.display='none'
    document.getElementById('transaction-history').style.display='none'
    document.getElementById('send-money').style.display='block'

})

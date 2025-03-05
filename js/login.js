document.getElementById('login-btn').addEventListener('click',function (event){
    // For Reload Problem 
    event.preventDefault()
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)
    if(accountNumber.length === 11){
        if(convertedPin === 1325){
            window.location.href ="./main.html"
            alert('Login Successfully')
        }
        else{
            alert("Pin Wrong")
        }
    }
    else {
        alert("Need a Valid Number")
    }
})

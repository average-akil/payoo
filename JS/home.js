// add money to the account
//  step 1 : add addEventListener
// step 2 : get money to be added to the account balance
// s-3 verify the pin number

document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    // s-2 get money to be added in the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    const pinNumber = document.getElementById('input-pin-number').value
    console.log(pinNumber)


    //s-3 verify pin number

    if (pinNumber === '1234') {
        

        // s-4 get the current balance
        const balance = document.getElementById('account-balance').innerText
        console.log(balance)
       
        //step -5
        const addMoneyNumber = parseFloat(addMoneyInput)
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        //step - 6 : update the balance in the webPage

        document.getElementById('account-balance').innerText =newBalance
        


    } else {
        alert("error 404")
    }
})
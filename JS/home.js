// add money to the account
//  step 1 : add addEventListener
// step 2 : get money to be added to the account balance

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // s-2 get money to be added in the account
   const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    const pinNumber = document.getElementById('input-pin-number').value
    console.log(pinNumber)
})
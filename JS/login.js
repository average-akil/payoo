// document.getElementById('btn-login').addEventListener('click',fun)
// document.getElementById('btn-login').addEventListener('click',function(){
    
// })
// form submit reloading the page
// step 1. set eventhandler
document.getElementById('btn-login').addEventListener('click',function(event){
    //step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // vejal for beginners
console.log('login btn clicked')

   //step-3 : get the phone number
   const phoneNumber = document.getElementById('phn-number').value;
        console.log(phoneNumber);

})

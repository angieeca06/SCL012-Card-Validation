import validator from './validator.js';

let inputName  = (e) => {
  const name = document.getElementById('name').value
  document.getElementById('targetName').innerHTML = name
}
document.getElementById('name').addEventListener('change', inputName);

let inputCardNumber  = (e) => {
  const cardNumber = document.getElementById('cardNumber').value;
  document.getElementById('targetCardNumber').innerHTML = cardNumber;
  if(cardNumber.length <= 16 && cardNumber.length >= 14){
    typeTarget(cardNumber.split(''));
    validator.isValid(cardNumber);
  }else if(cardNumber.length < 14){
    swal({
      title: "Complete the number card",
      text: "Your card number must be between 14 and 16 characters",
    });
  }else {
    swal({
      title: "Excess numbers",
      text: "Your card number must be between 14 and 16 characters",
    });
  }
}
document.getElementById('cardNumber').addEventListener('change', inputCardNumber);

let typeTarget =  (targetNumberArray) => {
    let firstDigits = targetNumberArray.slice(0,1);
    firstDigits.map((element) => {
      switch(element){
        case '4': console.log('visa'); break
        case '5': console.log('Mastercard'); break
        case '6': console.log('Discover'); break
        case '3': console.log('Amex'); break;
        default: console.log('Sin marca');
      }
    })
  };
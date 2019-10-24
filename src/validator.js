window.validator = {

  pullPairNumbers: (targetNumber) => {
    let pairNumbers = [];
    const targetNumberArray = targetNumber.split('')
    for(let i = 0; i < targetNumberArray.length; i++){
      if(i % 2 === 0){
        pairNumbers.push(targetNumberArray[i]);
      }
    }
    validator.multiplyNumbers(pairNumbers)
    return pairNumbers
  },

  multiplyNumbers: (pairNumbers) => {
    const numbersMultiplied = [];
    pairNumbers.map((numbers, i) => {   
      console.log(numbers.length)
      numbersMultiplied.push(numbers * 2);
    });
    return numbersMultiplied
  },

  isValid: (targetNumber) =>{
   validator.pullPairNumbers(targetNumber);
  //  console.log(pairNumbers)
  }

};

// export default validator;

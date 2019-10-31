const validator = {

  pullPairNumbers: (targetNumberArray) => {
    let pairNumbers = [];
    for(let i = 0; i < targetNumberArray.length; i++){
      if(i % 2 === 0){
        pairNumbers.push(targetNumberArray[i]);
      }
    }
    return pairNumbers
  },
  
  multiplyNumbers: (pairNumbers) => {
    const numbersMultiplied = [];
    pairNumbers.map((numbers) => { 
      numbersMultiplied.push(numbers * 2);
    });
    return numbersMultiplied
  },
  
  sumOfTwoOrMoreDigits: (multipliedNumbers) => {
    let sum = 0;
    const allNumbersSum = [];
    multipliedNumbers.map((numbers) => {
      const numberOfDigits = numbers.toString();
      if(numberOfDigits.length > 1){
        let arrayOfTwoOrMoreDigits = Array.from(numberOfDigits);
        for(let i = 0; i < arrayOfTwoOrMoreDigits.length-1; i++){
          sum = parseInt(arrayOfTwoOrMoreDigits[i]) + parseInt(arrayOfTwoOrMoreDigits[i+1]);
          allNumbersSum.push(sum);
        }
      }else{
        allNumbersSum.push(numbers);
      }
    })
    return allNumbersSum;
  },
  
  sumAllTargetNumbers: (sumOfTwoOrMoreDigits) => {
    let sum = sumOfTwoOrMoreDigits.reduce((a, b) => a + b );
    return sum;
  },
  
  isValid: (targetNumber) =>{
    const targetNumberArray = targetNumber.split('')
        let pairNumbers = validator.pullPairNumbers(targetNumberArray);
        let multipliedNumbers = validator.multiplyNumbers(pairNumbers);
        let sumOfTwoOrMoreDigits = validator.sumOfTwoOrMoreDigits(multipliedNumbers);
        let resultSum = validator.sumAllTargetNumbers(sumOfTwoOrMoreDigits);
        console.log(resultSum)
        return resultSum
  }
};

export default validator;

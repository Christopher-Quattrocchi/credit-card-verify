// Business Logic

function mainFunction(initialNum) {
  let transformedArray = transformNumber(initialNum);
  let stringNum = transformedArray.join("");
  let transformedNum = parseInt(stringNum);
  console.log(transformedNum); 
}

function transformNumber(initialNum) {
  let digits = initialNum.toString().split("");//turn into string so we can use the split method
  let realDigits = digits.map(Number);//turn the string back into a number array
  let newNum = [];
  for (i = 0; i < realDigits.length; i++) {//iterating over every index because we will use conditionals to do specific things for even or odd
    if (i % 2 === 0) { //check to see if index is even
      newNum.push(realDigits[i]);
    } else { // for odd index
      let doubledVal = realDigits[i] * 2; //new var for doubled digit
      if (doubledVal > 9) { //check if doubled digit is two digits
        let twoDigits = doubledVal.toString().split("").map(Number);//if so, we have to turn it into a string to split it, then we use map to turn it back into a number array
        let addedNumber = twoDigits[0] + twoDigits[1];//add the digits
        newNum.push(addedNumber); //push the added number to the array
      } else {
        newNum.push(doubledVal);//if the doubled number is one digit, we push it without changing it further
      }
    }
  }

  return newNum;
}

// function lastDigitCheck(newNum)

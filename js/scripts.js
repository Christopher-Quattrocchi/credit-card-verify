// Business Logic

function transformNumber(initialNum) {
  let digits = initialNum.toString().split("");
  let realDigits = digits.map(Number);
  // console.log(realDigits);




  let newNum = [];
  for (i = 0; i < realDigits.length; i++) {
    if (i % 2 === 0) { //check to see if index is even
      newNum.push(realDigits[i]);
    } else { // for odd index
      let doubledVal = realDigits[i] * 2;
      if (doubledVal > 9) {
        let twoDigits = doubledVal.toString().split("").map(Number);
        let addedNumber = twoDigits[0] + twoDigits[1];
        newNum.push(addedNumber);
      } else {
        newNum.push(doubledVal);
      }

    }
  }

  console.log(newNum);
}


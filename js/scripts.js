// Business Logic


//this is the 'organizer' function that will call other functions
function mainFunction(initialNum) {
  let checkForValidInput = verifyCompany(initialNum);
  console.log("check for valid input:" + checkForValidInput);
  let transformedArray = transformNumber(initialNum);
  console.log("transformedArray:" + transformedArray);
  let verifyNumArray = lastDigitCheck(transformedArray);
  console.log("verify:" + verifyNumArray);
  // let stringNum = transformedArray.join("");
  // let transformedNum = parseInt(stringNum);
  // console.log(transformedNum); 
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

function lastDigitCheck(transformedArray) {
  let sumOfArray = transformedArray.reduce((acc, cur) => acc + cur, 0);
  if (sumOfArray[1] === 0) {
    return "valid";
  } else {
    return "invalid";
  }
}

function verifyCompany(initialNum) {
  let numString = initialNum.toString();
  if ((numString.length !== 15) && (numString.length !== 16)) {
    return "Please enter a 15 or 16 digit credit card number";
  } else if (numString.startsWith("34") || numString.startsWith("37") && numString.length === 15) {
    return "American Express";
  } else if (numString.startsWith("4")) {
    return "Visa";
  } else if (numString.startsWith("5")) {
    return "MasterCard";
  } else if (numString.startsWith("6")) {
    return "Discover";
  } else {
    return "You found a bug!";
  }
}

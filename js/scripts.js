// UI Logic
window.addEventListener("load", function() {
  console.log("form loaded");
  document.querySelector("form#getCardNumber").addEventListener("submit", handleSubmission);
})

function handleSubmission(event) {
  event.preventDefault();
  const initialNum = document.querySelector("input#inputNumber").value;
  result = mainFunction(initialNum);
  const pEle = document.createElement("p");
  pEle.append(result);
  outputDiv = document.querySelector("div#output-div");
  outputDiv.append(pEle);
}


// Business Logic


//this is the 'organizer' function that will call other functions
function mainFunction(initialNum) {
  let digitCheck = verifyDigitLength(initialNum);
  if (digitCheck === false) {
    return "Please enter a valid 15 or 16 digit number";
  } else {
    let verifyCardCompany = verifyCompany(initialNum);
    result = verifyCardCompany; 
  }

  let transformedArray = transformNumber(initialNum);
  
  let verifyNumArray = lastDigitCheck(transformedArray);
  return result.concat(verifyNumArray);
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
  let stringSum = sumOfArray.toString();
  console.log(sumOfArray);
  if (stringSum.charAt(1) === "0") {
    return " The number is valid.";
  } else {
    return " The number is invalid.";
  }
}

function verifyCompany(initialNum) {
  let numString = initialNum.toString();
  if (numString.startsWith("34") || numString.startsWith("37") && numString.length === 15) {
    return "Your card is an American Express.";
  } else if (numString.startsWith("4")) {
    return "Your card is a Visa.";
  } else if (numString.startsWith("5")) {
    return "Your card is a MasterCard.";
  } else if (numString.startsWith("6")) {
    return "Your card is Discover.";
  } else {
    return "Your card does is not from a major credit card company.";
  }
}

function verifyDigitLength(initialNum) {
  let numString = initialNum.toString();
  if ((numString.length !== 15) && (numString.length !== 16)) {
    return false;
  } else {
    return true;
  }
}
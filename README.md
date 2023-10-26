Describe:

Test: "It will double every other digit, starting with second number"
Code: dubNum(4102 0808 8043 5620)
Expected Output: (4204 0707 8046 5320)

Test: "It will recognize if the sum is two digits and add those together"
Code: testAdd (8*2 = 1+6)
Expected Output: 7

Test: "It will add the digits of the new number"
Code: testCard(4204 0707 8046 5320)
Expected Output: 4 + 2 + 0 + 4 + 0 + 7 + 0 + 7 + 8 + 0 + 4 + 6 + 5 + 3 + 2 + 0 = 52

Test: "It will check if the last digit of the sum is 0"
Code: lastDigitCheck(50);
Expected Output: valid

Test: "Check the first digit(s) of the card"
Code: verifyCompany(4744 4444 4444 4444);
Expected Output: 47

Test: "match the first digit(s) with what companies issue"
Code: verifyCompany(4744 4444 4444 4444);
Expected Output: Visa

Test: "It will check to make sure that the number is 15 or 16 digits (and are numbers)"
Code: isValid(4102 0808 6043 5620)
Expected Output: true

Test: "If 16 digits, must start with 4, 5, or 6. If 15 digits, must start with 34 or 37"
Code: verifyCompany(4102 0808 6043 5620)
Expected Output: Visa or true depending on how we build it

Rough idea: 
 

1st: Make sure number is exactly 16 digits

2nd: double every other number, starting with second. If sum greater than one digit, add them, and push to the new array

3rd: Sum up numbers in the new array

4th check last digit of sum, if not equal to 0, then it's invalid

5th: Make sure the number starts with either: 
  AmEx: 34 or 37
  Visa: 4
  Mastercard: 5
  Discover: 6
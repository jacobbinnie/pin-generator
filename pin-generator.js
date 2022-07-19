// * The library should export a function that returns a batch of 1,000 PIN codes in random order
// * Each PIN code in the batch should be unique
// * Each PIN should be:
// * 4 digits long
// * Two consecutive digits should not be the same (e.g. 1156 is invalid)
// * Three consecutive digits should not be incremental (e.g. 1236 is invalid)
// * The library should have automated tests.

let pins = [];
const requestedAmount = 10;

function generatePinCodes(requestedAmount) {
  do {
    let number = Math.floor(Math.random() * 9999);
    if (number < 1000) {
      if (number >= 100) {
        let updatedNumber = "0" + number.toString();
        let numberArray = updatedNumber.split("");

        checks(numberArray);
      } else null;
    } else {
      let updatedNumber = number.toString();
      let numberArray = updatedNumber.split("");

      checks(numberArray);
    }
  } while (pins.length < requestedAmount);

  return pins;
}

function checks(numberArray) {
  // Checks if two consecutive numbers present in pin
  numberArray[0] !== numberArray[1] &&
    numberArray[1] !== numberArray[2] &&
    numberArray[2] !== numberArray[3] &&
    // Check if three consecutive numbers could be incremental
    numberArray[0] !== numberArray[1] - 1 &&
    numberArray[1] !== numberArray[2] - 1 &&
    // Checks if number already exists in array of Pins
    pins.indexOf(numberArray.join("")) === -1 &&
    // Pushes ONLY if number passes the above tests
    // Pushes ONLY if number passes the above tests
    pins.push(numberArray.join(""));
}

console.log(generatePinCodes(requestedAmount));

// Author: jacobbinnie.com

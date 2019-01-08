// Code your solution here!
function printString(string) {
  let substring;
  console.log(string[0]);
  if (string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  let x = myString.length
  if (x < 2) {
    return true;
  } else if (myString[x - 1] === myString[0]){
    return isPalindrome(myString.substring(1, x - 1))
  } else {
    return false;
  }
}


function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}


function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray))
  }
}

function includesNumber(myArray, number) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0]=== number) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), number);
  }
}

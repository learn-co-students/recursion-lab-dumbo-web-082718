function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let subString = string.substring(1, string.length)
    printString(subString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string === "")
    return "";
  else
    return reverseString(string.substr(1)) + string.charAt(0);
}

function isPalindrome(string) {

}

function addUpTo() {

}

function maxOf() {

}

function includesNumber() {

}

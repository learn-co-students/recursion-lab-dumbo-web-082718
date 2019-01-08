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
  if (string.length < 2) {
    return true
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1))
  }
  return false
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index]
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.shift(), maxOf(array))
  }
}

function includesNumber(array, element) {
  if (array.length === 0) {
    return false
  } else {
    let chosen = array.shift()
    if (element === chosen) {
      return true
    } else {
      return includesNumber(array, element)
    }
  }
}

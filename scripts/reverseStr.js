const reverseString = (string) => {
  let reverseStr = string.split('').reverse().join('');
  return reverseStr;
}

module.exports = reverseString;
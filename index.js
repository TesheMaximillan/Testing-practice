const stringLength = string => {
  if (string === '' || string.length > 10)
    return 'The string should be between 1 and 10 character '
  return string.length;
}

const reverseString = string => {
  return string.split('').reverse().join('');
}


module.exports = {stringLength, reverseString}
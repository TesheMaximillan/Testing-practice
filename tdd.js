exports.capitalizeString = string => {
  let stringArray = string.split('');
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join('');
}
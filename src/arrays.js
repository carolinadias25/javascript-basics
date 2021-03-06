const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",");
};

const uppercaseWordsInArray = strings => {
  return strings.map(element => element.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(rev =>
    rev
    .split("")
    .reverse()
    .join("")
  );
};

const onlyEven = numbers => {
  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
  // /^[aeiou]/i means:
  // ^ matches the start of the string.
  // [aeiou] matches any of the characters inside the square brackets, a single time.
  // i is a case-insensitive modifier.
};

const removeSpaces = string => {
  return string.replace(/\s/g,'');
};

const sumNumbers = numbers => {
  return numbers.reduce((a,b) => a + b, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  /*
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );*/
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
}
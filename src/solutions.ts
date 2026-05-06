type ArrayOfRandomNumbers = number;

function filterEvenNumbers(numbers: ArrayOfRandomNumbers[]) {
  return numbers.filter((num) => num % 2 === 0);
}

type ReverseTheString = string;
function reverseString(GiveAInput: ReverseTheString) {
  return GiveAInput.split("").reverse().join("");
}

type StringOrNumber = string | number;

function checkType(InputChecker: StringOrNumber) {
  return typeof InputChecker === "string" ? "String" : "Number";
}

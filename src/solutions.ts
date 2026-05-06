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



const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<User, Key extends keyof User>(obj: User, key: Key) {
  return obj[key];
}

console.log(getProperty(user, "name"));
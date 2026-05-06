type ArrayOfRandomNumbers = number

function filterEvenNumbers(numbers: ArrayOfRandomNumbers[]) {
 
  return numbers.filter((num) => num % 2 === 0);
}




type ReverseTheString = string

function reverseString(GiveAInput: ReverseTheString) { 
  return GiveAInput.split("").reverse().join("");
}




function filterEvenNumbers(numbers: number[]) {
  return numbers.filter((num) => num % 2 === 0);
}


function reverseString(GiveAInput: string) {
  return GiveAInput.split("").reverse().join("");
}


function checkType(InputChecker: string | number) {
  return typeof InputChecker === "string" ? "String" : "Number";
}



const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<User, Key extends keyof User>(obj: User, key: Key) {
  return obj[key];
}

interface Book { 
  title: string;
  author: string;
  publishedYear: number;
}
type ReadingStatus = {
  isRead: boolean;
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};


function toggleReadStatus(myBook: Book, isRead: boolean = true): ReadingStatus {
  return { ...myBook, isRead };
}
console.log(toggleReadStatus(myBook))
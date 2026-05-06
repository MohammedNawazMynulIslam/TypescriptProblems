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
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

function toggleReadStatus(myBook: Book, isRead: boolean = true): ReadingStatus {
  return { ...myBook, isRead };
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");

function getIntersection(
  FirstSetArrayOfNum: number[],
  SecondSetArrayOfNum: number[],
) {
  const commonArrayOfNumber = new Set(SecondSetArrayOfNum);
  return FirstSetArrayOfNum?.filter((ArrayOfNumber) =>
    commonArrayOfNumber.has(ArrayOfNumber),
  );
}

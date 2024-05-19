// // functions in typescript
// console.log("start");

// // function declaration
// function intro(name: string, age: number): string {
//   return `my name is ${name} and age is ${age}`;
// }

// // function expression
// const intro2 = function intro(name: string, age: number): string {
//   return `My name is ${name} and age is ${age}`;
// };

// // arrow function
// const intro3 = (name: string, age: number) => {
//   return `my name is ${name} and age is ${age}`;
// };

// export default {};

//

// functions in typescript
// includes function call signatures
// https://www.udemy.com/course/typescript-course/learn/lecture/31786232#overview

console.log("start");

// function declaration
function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `my name is ${name} and age is ${age} and I live in ${country}`;
  }
  return `my name is ${name} and age is ${age}`;
}

console.log(intro("john", 32));
console.log("john", 32, "canada");

enum AgeUnit {
  years = "years",
  months = "months",
}

type greetingFunction = (greeting: string) => string;

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  // greet: (greeting: string, ageUnit: AgeUnit) => {};
  greet: greetingFunction;
};

const person: Person = {
  name: "scott",
  age: 30.5,
  ageUnit: AgeUnit.years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${person.name}`;
  },
};

function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

// console.log(convertAgeToMonths(person));
console.log(person.greet(" Good Morning"));

export default {};

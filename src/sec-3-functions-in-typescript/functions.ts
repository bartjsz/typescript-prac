// functions in typescript
console.log("start");

// function declaration
function intro(name: string, age: number): string {
  return `my name is ${name} and age is ${age}`;
}

// function expression
const intro2 = function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
};

// arrow function
const intro3 = (name: string, age: number) => {
  return `my name is ${name} and age is ${age}`;
};

export default {};

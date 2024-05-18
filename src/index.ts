// functions in typescript
console.log("start");

// function declaration
function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `my name is ${name} and age is ${age} and I live in ${country}`;
  }
  return `my name is ${name} and age is ${age}`;
}

console.log(intro("john", 32));

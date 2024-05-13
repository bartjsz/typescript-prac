console.log("start");

// has to have all the properties of one of the types
// can be either Dog or Cat or Both or Cat + some of Dog vice versa

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let dogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: false,
  purrs: true,
};

// union types with primatives
type stringOrNumber = number | string;

function addNumberOrString(a: stringOrNumber, b: stringOrNumber) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(5, 10));
console.log(addNumberOrString("mark", 10));
console.log(addNumberOrString("mark", null));

// remove this when testing file its just to avoid the redelared block scope variable error
export default {};

console.log("start");
// https://www.udemy.com/course/typescript-course/learn/lecture/31770964#overview
// readonly array

let number: readonly number[] = [1, 2, 3];

number.push(1);

type readonlyPerson = readonly [string, string, number];

const person: readonlyPerson = ["john", "smith", 32];

type a = Readonly<string[]>;
type c = Readonly<[string, string, number]>;

export default {};

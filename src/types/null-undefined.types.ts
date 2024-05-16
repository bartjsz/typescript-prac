console.log("start");
// https://www.udemy.com/course/typescript-course/learn/lecture/31770986#overview
// null and undefined

let user: string;
console.log(user);

// let saveButton = document.getElementById("save");
// console.log(saveButton);

let loggedInUsername: string;

const users = [
  { name: "obby", age: 12 },
  { name: "hina", age: 32 },
];

const loggedInUser = users.find((user) => user.name === loggedInUsername);

console.log(loggedInUser.age);

// TS error because saveButton can be null. uncomment to see example
// let saveButton: HTMLElement = document.getElementById("save");

// One solution is to assert that the value will not be null by ending statement with !
// ! technically called non-null assertion operator commonly known as non-null
let saveButton: HTMLElement = document.getElementById("save")!;

// expllict was to guard against null value.
if (saveButton !== null) {
  // do something
}

export default {};

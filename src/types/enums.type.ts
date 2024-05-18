import * as roles from "./roles";
console.log("start");

// Enums
// https://www.udemy.com/course/typescript-course/learn/lecture/31771000#overview

//
// this is not declaritive. Better to use enums
// const roles = ["admin", "author", "editor"];
// roles[1];

enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

console.log(Roles.author);

const person: Person = {
  name: "john",
  email: "john@email.com",
  password: "password",
  // role: roles.AUTHOR as Roles, // is this right?
  role: Roles.editor,
};

let test = roles.ADMIN;

console.log("person", person);

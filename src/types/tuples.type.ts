console.log("start");
// https://www.udemy.com/course/typescript-course/learn/lecture/31756486#overview
// Tuples

// firstname, lastname, age
// let person: [string, string, number?]; // optional number
let person: [string, string, number];

person = ["john", "doe", 18];

// [
// NumberOfStudents: Number,
// passing: boolean
// 'john', 'stella'
// ]

type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "john", "stella", "mark"];
const failingStudents: listOfStudents = [1, false, "scott"];

export default {};

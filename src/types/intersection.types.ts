console.log("start");
// intersection
// https://www.udemy.com/course/typescript-course/learn/lecture/31756474#overview

type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog = {
  name: string;
  barks: boolean;
  color: string;
};

// intersection
type HybridAnimal = Dog & Cat;

const HybridAnimal: HybridAnimal = {
  name: "Max",
  color: "white",
  barks: true,
  purrs: false,
};

// remove this when testing file its just to avoid the redelared block scope variable error
export default {};

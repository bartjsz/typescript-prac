console.log("start");
//inference

// let firstname = "john";
// firstname = 25;

let num = 85;

let numTwo = 90;

let finalResult: number;

function addNumber(a: number, b: number) {
  return a + b;
}

finalResult = addNumber(10, 15);

// objects

let person = {
  name: "mark",
  age: 24,
};

let car: {
  color: string;
  brand: string;
} = {
  color: "red",
  brand: "bmw",
};

type Article = {
  author: string;
  content: string;
  title: string;
  image?: string;
};

// let article: {
//   author: string;
//   content: string;
//   title: string;
//   image?: string;
// };

let article: Article = {
  author: "stella",
  content: "hello world",
  title: "my first article",
};

let post: Article = {
  author: "Sam",
  content: "Hello world",
  title: "hello",
};

export default {};

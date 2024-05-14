console.log("start");
// index signatures
// https://www.udemy.com/course/typescript-course/learn/lecture/31756478#overview
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

type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDepartures: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    // [key: string]: string; // this is an index signatures cannot have multiple index signatures within same object
    [key: string | keyof HybridAnimal]: string | number; // this is an index signatures // can do unions exampel
    orderProperty: number; // need to add number as union to above index signature to prevent error
  };
};

const airPlane: Airplane = {
  flightNumber: "sg102",
  airplaneModel: "a380",
  dateOfDepartures: "01/12/2022",
  timeOfDeparture: "23:10",
  from: "JFK",
  to: "DCA",
  seats: {
    orderProperty: 323232,
    "10A": "Mark Thomas",
    "10B": "John Jacobs",
  },
};

export default {};

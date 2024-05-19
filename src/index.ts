// functions in typescript
// function overloading
// https://www.udemy.com/course/typescript-course/learn/lecture/31786238#overview
console.log("start");

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// using overloading with different params.
// ticket with return trip & tickt one way single trip

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));

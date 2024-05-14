console.log("start");

let a: number[] = [1, 2, 3];

let b: Array<string> = ["a", "b", "c"];

let c: (string | number)[] = ["a", 1, 1, 2];

type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDepartures: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
};

type Airplanes = Airplane[];

const airplanes: Airplanes = [
  {
    flightNumber: "sg100",
    airplaneModel: "a380",
    dateOfDepartures: "01/12/2022",
    timeOfDeparture: "23:10",
    from: "JFK",
    to: "DCA",
    seats: {
      orderProperty: "order prop",
      "10A": "Mark Thomas",
      "10B": "John Jacobs",
    },
  },
  {
    flightNumber: "sg200",
    airplaneModel: "a380",
    dateOfDepartures: "02/12/2022",
    timeOfDeparture: "23:10",
    from: "JFK",
    to: "DCA",
    seats: {
      orderProperty: "order  prop two",
      "10A": "Mark Thomas",
      "10B": "John Jacobs",
    },
  },
];

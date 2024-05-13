console.log("start");

let bigInt1 = BigInt(945845);

let bigInt2 = 12345312n;
// console.log(bigInt1);

const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;

const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(123458);
let b: bigint = 23456465n;

let c: bigint = a - b;

let e: bigint = 24551.2n; // can not use decmial points in bigints. floats//decimal are numbers
let f = Math.log(a); // only number types will work with Math object not bigints

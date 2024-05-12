console.log("start");

let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// expression of true or false
booleanValue = typeof "abc" === "string";

booleanValue = 1 > 0;

booleanValue = {};
booleanValue = "new york";

// typescript does not allow null and underfined are not falsey aka not boolean values
booleanValue = null;
booleanValue = undefined;

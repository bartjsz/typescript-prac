console.log("start");

function multiByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "please provide a valid number";
}

console.log(multiByTwo(4));
console.log(multiByTwo("test"));

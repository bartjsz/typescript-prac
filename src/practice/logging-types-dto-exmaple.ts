// https://stackoverflow.com/questions/67726498/how-to-console-log-typescript-type
// https://www.typescriptlang.org/play/#code/MYewdgzgLgBAIgUwGYEMCuAbKAVB05QgwC8MA3gLABQMtMKwUAlgG4IBcMAtAIwA01OjDQQEAJwD6YFAFsOMAEQKBVAL7VqUAJ4AHBDFz5CJGNr0gk8ZOiyGoBEAG4NVaqEiwwCAO4OenOwcTMgA6MMRUTBw8e0JVZyovX0IeEJFxKVl9UgUAMTEEABMFBIB6UpAxN3BoGCSHACYAmKDSAHkAIwArBEYQlAgIJgBzMAAKMlU+K0jbFsJpsnTJaTlOBQAhFDEvLQVVAEoE6sgQDAQQjBBhsfqUo5hy8kUGZjYFTl5phWXMuQ-FPkigoYKoYCcIGcLlcbncQA0Hk8yC9GKwEACvopfqt0estjsEHtQTAgA

const DefaultTestDto = {
  active: -1,
  user_name: "",
};

type TestDto = typeof DefaultTestDto;

const newDto1: TestDto = { ...DefaultTestDto };
newDto1.user_name = "Fred";
//or
const newDto2: TestDto = Object.assign({}, DefaultTestDto, {
  user_name: "Barney",
});

console.log(newDto1); // { "active": -1, "user_name": "Fred" }
console.log(newDto2); // { "active": -1, "user_name": "Barney" }

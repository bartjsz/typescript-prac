console.log("start");
// void and never types
// https://www.udemy.com/course/typescript-course/learn/lecture/31770992#overview

const addnumbers = (): void => {
  console.log(2 + 4);
};

addnumbers();

const throwNewError = (): never => {
  throw new Error("your program terminated because of error");
};

// void will not cause crash but the never type can cause fatal run time error eg uncaught exception error.
// Understanding and Fixing fatal error uncaught error in javascript article
// https://www.bugpilot.com/guides/en/javascript-error-fatal-error-uncaught-error-608a

export default {};

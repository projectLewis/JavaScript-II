// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let varying = 2;
const returnVarying3 = () => {
  return varying *= 3;
}
console.log(returnVarying3());
console.log(returnVarying3());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let tally = 0;
const counter = () => {
  const ticker = () => {
    return tally += 1;
  }
  return ticker();
  // Return a function that when invoked increments and returns a counter variable.
};
console.log(counter());
console.log(counter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const count = 0;
const counterFactory = (name) => {
  function CountThing(name) {
    this.name = name;
    this.count = 0;
    this.increment = function () {
      return this.count += 1;
    }
    this.decrement = function () {
      return this.count -= 1;
    }
  }
  return new CountThing(name);
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const robot = counterFactory("robot");
console.log(`Counter Factory: ${ robot.name }`);
console.log(`Counter Factory: ${ robot.count }`);
console.log(`Counter Factory: ${ robot.increment() }`);
console.log(`Counter Factory: ${ robot.decrement() }`);

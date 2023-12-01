function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  // console.log(typeof n1);
  const res = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + res);
  } else {
    return res;
  }
}

const number1 = 5;
const number2 = 5.8; //JS will conver this into a string (type coercion)
let number3: number = 10; //we can add types to variable names by using : after variable name but it's not a good idea because TS can guess what type the variable should be without explicitly saying it. It's only good idea to do so during variable declaration:
let number4: number;
const printResult = true;
const resultPhrase = "Result is: ";
// resultPhrase = 0; //error because resultPhrase was initialized with string
add(number1, number2, printResult, resultPhrase);

//Object Types:
// const person: { name: string; age: number } = {
//   name: "Anna",
//   age: 30,
// };
//Not a good practice. TS can infere these types.
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //This marks a tuple type. This tells TS I want to have a special array, woth exactly two elements. The first should be a number and the second should be a string
// } = {
//   name: "Anna",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin"); //ok push is allowed in ts
// person.role[1] = 10; // not ok because the tuple expects array with two elements with one nuber and one string. It only makes sure we are not assigning wrong value here
// person.role = [0, "admin", "user"]; //error target allows only two elements
let favActivities: string[]; //ok to do because it's just variable declaration. In this case array of strings
// favActivities = [1, 2]; //error becase favAactivities only accepts strings as elements of the array
let someArr: any[]; //any type will be acceptable in the array. Not used too often because you lose the benefits of TS
someArr = [1, "cat"]; //no error
favActivities = ["Sport"];
// console.log(person.name); //prop name doesn't exist

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase()); //TS won't complain cause it knows that person.hobbies array has strings (inference)
//   // console.log(hobby.map()); //error - property map does not exist on type 'string
// }

enum Role {
  ADMIN = 5, //you can give different identifiers than the default ones. By default numeric identifiers are given
  READ_ONLY,
  AUTHOR = "AUTHOR", //identifiers can also be strings
}
const person = {
  name: "Anna",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};
console.log(person.role);
if (person.role === Role.AUTHOR) {
  console.log(`${person.name} is ${person.role}`);
}

//Any type - any type of value, no specific type assignment. Any literally anything. Avoid as possible
let animals: any[];
animals = ["cat", 1];
let something: any;
something = 1;
something = "Hello";

type Point = {
  x: number;
  y: number;
};

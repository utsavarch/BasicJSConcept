// console.log("Hello World");

//datatype
/*
1. number
2. boolean
3. string
4. bigint
5. undefined & null
*/

//variable
// var a = 1;
// let b = 2;

//undefined
// let a;
// console.log(a);

//constant
// const a = 10;
// console.log(a);

//Exponential
// let e = 1002e2;
// console.log(e);
// Boolean
// let a = 1;
// let b = 2;
// let c = a > b; //Comparision
// console.log(c);

// let a = "1";
// let b = 1;
// console.log("Type of a is:", typeof a, "Type of b is:", typeof b);
// console.log("Value of a is:", a, "Value of b is:", b);
// console.log(a == b); //compares value
// console.log(a === b); //compares value and type
// console.log(a + b); //concatenation

// let a = 4;
// let b = 2;
// console.log(a % b);
// console.log("a");
// const getDataFromServerApi = () => {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 5000);
// };
// //See image to understand the concept (image of call stack)

// console.log(getDataFromServerApi());

// console.log("b");

//logical operator

// let a = 1;
// let b = 10;

// console.log(a || b); //returns last operand

// "||" OR finds first truthy value
// "&&" AND finds first false value
// "!" NOT

//truthy values
//1. number
//2. string
//3. object
//4. bigint.....

// let m; //undefined
// console.log(Boolean(m)); //returns false
// console.log(m || 2 ); //returns 2
// console.log(false || undefined || null); //returns last operand "output: null"

// console.log(typeof null); //returns object
// console.log(typeof undefined); //returns udefined

// let a = 1;
// let b = 2;
// console.log(a && b); //returns last operand because all true

// console.log(!false); //NOT operator changes truthy to falsy and falsy to truthy
// console.log(!false && !true && !!undefined); // returns false because not undefined is true and double not undefined is false

//Loop

//while loop
// let i = 0;
// while (i < 10) {
//   console.log("Utsav", i);
//   i++;
// }

//For Loop
// let alpha = ["a", "b", "c"];
// for (let i = 0; i < alpha.length; i++) {
//   console.log(alpha[i]);
// }

//forEach
// let alpha = ["a", "b", "c"];
// alpha.forEach((item) => {
//   console.log(item);
//   console.log("break");
// });

//For In and For Of
//Break and Continue

// function divide(a, b) {
//   return a / b;
// }
// console.log(divide(4, 2));

// let n = [1, 2, 3, 4, 5];

// for (const items of n) {
//   //   if (items === 3) {
//   //     break;
//   //   }
//   if (items === 2) {
//     continue;
//   }
//   console.log(items);
// }

//Array

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(num.length); // gives length of array

// console.log(num.toString()); //changes array to a single string

// console.log(typeof num); //gives type of array

// console.log(num.at(3)); //vlaue at index 3
// console.log(num.at(-3)); //counts array from behind -1,-2,-3....

// console.log(num.join(":")); // joins items as 1:2:3:....

// console.log(num.push()); //inserts at last position of array
// console.log(num.pop()); //takes out last value

// console.log(num.indexOf(3)); //returns index of 3 as 2

// console.log(num.includes(4)); //returns true if 4 is present in array num else false

// console.log(num.find((element) => element > 5)); // returns 6 closest element greater than 5

// console.log(num.findIndex((element) => element > 5)); //returns 5 as index of 6

// num.forEach((element) => console.log(element)); //each element of array

// console.log(num.map((x) => x * 2)); //maps each element of array with its multiplication of 2

// console.log(num.filter((x) => x % 2 == 0)); //filter element that gives reminder 0 when divided by 2

// console.log(num.every((x) => x < 10)); // true becasue all element in array is less than 10

// console.log(num.some((x) => x < 5)); //true because atleast 1 element in array is less than 5

// console.log(Array.from("12345")); // creates new string array

//Reduce

// console.log(num.reduce((acc, x) => acc + x, 0)); //sum of array as output

// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]
// let n = [1, 2, 3, 4, 5];
// console.log(n.reduce((a, x) => a * x, 1));

// console.log(ageGroup.reduce((acc, x) => acc + x, 0));
// for (let key of num.keys()) {
//   console.log(key);
// } //bujena

//Map example
// const name = ["Utsav", "Acharya", "Sharma"];
// const newReturnedArray = name.map((item, index) => {
//   return item + " " + index;
// });
// console.log(newReturnedArray);

//ways of creating array

// const cars = ["Saab", "Volvo", "BMW"];

// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";

// const cars = new Array("Saab", "Volvo", "BMW");

//function
//function functionName(parameter1,parameter2){
//     return "";
// }

//function declaration
// function add(a, b) {
//   return a + b;
// }
// let sum = add(10, 5); //function call
// console.log(sum);

// function Name(first, middle, last) {
//   return first + " " + middle + " " + last;
// }

// console.log(Name("Utsav", "", "Acharya Sharma"));

// Arrow function
// const getSum = (a, b) => a + b;
// console.log(getSum(1, 2));

// const comp = (a, b) => {
//   if (a > b) {
//     return "First number is greater";
//   }
//   return "Second Number is greater";
// };

// console.log(comp(3, 2));

//even and odd sperate function
// let number = [2, 4, 6, 8, 10, 11, 13, 18];
// let even = [];
// let odd = [];

// function evenFinder(n) {
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 === 0) {
//       even.push(n[i]);
//     } else odd.push(n[i]);
//   }
// }
// evenFinder(number);
// console.log(even);
// console.log(odd);

//even filter from array another approach

// let number = [2, 4, 6, 8, 10, 11, 13, 18];
// const getEvenNumber = (array) => {
//   return array.filter((num) => num % 2 === 0);
// };

// console.log(getEvenNumber(number));

'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// Function Declarations vs. Expressions

// // Function declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1993);

// console.log(age1, age2);

// const acc1 = {
//   owner: "sabari",
//   moments: [200, 300, 100, 400, -300, 500, -400, -100, 300, 200],
// };

// // Filter positive numbers
// const positiveMoments = acc1.moments.filter(num => num > 0);

// // Filter negative numbers
// const negativeMoments = acc1.moments.filter(num => num < 0);

// // Calculate total positive and negative moments using reduce
// const totalPositive = positiveMoments.reduce((acc, val) => acc + val, 0);
// const totalNegative = negativeMoments.reduce((acc, val) => acc + val, 0);

// console.log("Positive Moments:", positiveMoments);
// console.log("Negative Moments:", negativeMoments);
// console.log("Total Positive:", totalPositive);
// console.log("Total Negative:", totalNegative);
// console.log(totalPositive + totalNegative);

// const animals = ["lion", "elephant", "zebra", "giraffe", "monkey", "tiger"];

// const sliceAnimals = animals.slice(2,4);
// console.log(sliceAnimals);

// const months = ['January', 'February', 'March', 'April', 'May'];

// // Input = ['January', 'February', ((2)/'March'Here Change), 'April', 'May'];
// // Replace (1)'March' with (1)'June'
// months.splice(2, 1, 'June');

// console.log(months);
// // Output: ['January', 'February', 'June', ((3)/ 'April', 'May' Here Remove)] 

// // Remove (2)'April' and 'May'
// months.splice(3, 2);

// console.log(months); 
// // Output: ['January', 'February', 'June']

// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display age
// console.log("My father is " + myFather.age + ".");

// Constructor function for Person objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// // Create three Person objects
// const person1 = new Person("John", "Doe", 30, "brown");
// const person2 = new Person("Alice", "Smith", 25, "blue");
// const person3 = new Person("Bob", "Johnson", 40, "green");

// // Store persons in an array
// const personsArray = [person1, person2, person3];

// // Accessing properties of the first person
// console.log("First person: ", personsArray[0]);
// console.log("First person's age: ", personsArray[0].age);

// Alternatively, you can store persons in an object with keys
// const personsObject = {
//   person1: person1,
//   person2: person2,
//   person3: person3
// };

// // Accessing properties of the first person in the object
// console.log("Persons in the object: ", personsObject);
// console.log("First person's eye color: ", personsObject.person1.eyeColor);

// //mapping concept

// const map = new Map();

// map.set('key1', 'value1');
// map.set('key2', 'value2');
// map.set('key3', 'value3');

// console.log(map.get('key1')); // Output: 'value1'
// console.log(map.size); // Output: 3

// map.forEach((value, key) => {
//   console.log(key, value);
// });

// let age =7;

// console.log(`Tommy is ${age} years old`);

// let isMailSent = false;

// if (isMailSent === true) {
//   console.log(`Is ok`)
// }
// else {
//   console.log(`Is not ok`)
// }

// let pizzaName = 'Margarita';

// function myFunction() {
  
//   var pizzaName = "Margarita";
//   console.log(pizzaName)
  
// }
// console.log(`can't use ${pizzaName}`)

// const promise = new Promise((resolve, reject) => {
//   const res = true;
//   // An asynchronous operation.
//   if (res) {
//     resolve('Resolved!');
//   }
//   else {
//     reject(Error('Error'));
//   }
// });

// promise.then((res) => console.log(res), (err) => console.error(err));

// let num = [1, 2, 3, 4, 5];

// // Initialize a variable to store the sum
// let sum = 0;

// // Loop through the array and add each number to the sum
// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }

// // Print the sum
// console.log("The sum of the numbers is:", sum);

// const url = 'https://jsonplaceholder.org/users';

//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(jsonData => {
//         console.log(jsonData);
//         console.log(jsonData[1].firstname)
//       })
//       .catch(error => {
//         console.log('error');
//       });

// const url = 'https://json-placeholder.mock.beeceptor.com/users'

// fetch(url)
//    .then(response => {
//     if(!response.ok) {
//         throw new Error('Network not working')
//     }
//     return response.json
//    })
//    .then(jsonData => {
//        console.log(jsonData);
//    })
//    .catch(error => {
//     console.log('error')
//    });

// 1. max on prompt
// function findMax(arr) {

//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log("Max value:", max);
// }

// const userInput = prompt("Enter values:");
// const numbers = userInput.split(',').map(Number);
// findMax(numbers);

// 2. finding the values on two numbers by adding on addition number
// const newString = prompt("Enter array:");
// let arr = newString.split(",");
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(arr[i]);
// }

// const newNum = Number(prompt("Enter a number"));

// let result = [];
// let flag = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === newNum) {
//       result.push(arr[i], arr[j]);
//       flag = 1;
//       break;
//     }
//   }
//   if (flag === 1) {
//     break;
//   }
// }

// if (result.length === 0) {
//   console.log("Result: 0");
// } else {
//   console.log("Result: " + result);
// }

// 3. Find the median on the odd and even number in the median CSSMathValue

// for even = {1,2,/,3,4} => (2+3)/2 = 2.5
// for odd = {1,2,3,4,5} => 3 answer.

// function centerValue(arr) {
//   const length = arr.length;

//   if (length % 2 === 0) {
//       const middleRight = length / 2;
//       const middleLeft = middleRight - 1;
//       return (arr[middleLeft] + arr[middleRight]) / 2;
//   } else {
//       return arr[(length - 1) / 2];
//   }
// }

// const input = prompt("Enter numbers:");

// const numbers = input.split(',').map(num => parseFloat(num));

// if (!numbers.every(num => !isNaN(num))) {
//   console.log("Invalid input. Please enter numbers separated by commas.");
// } else {
//   console.log("Center Value(s):", centerValue(numbers));
// }

//4. practice

// function centerValue(arr) {
//   const length = arr.length;

//   if (length % 2 === 0){
//     const middleRight = length / 2;
//     const middleLeft = middleRight -1;
//     return (arr[middleLeft] + arr[middleRight]) /2;
//   } else {
//     return arr[(length -1) / 2];
//   }
// }

// const UserInput = prompt('Enter values');
// const no = UserInput.split(',').map(num => parseFloat(num));

// if (!no.every(num => !isNaN(num))) {
//   console.log('Invalid input on commas');
// } else {
//   console.log('Center values:', centerValue(no));
// }


// const avg = 74;
// const grade = avg>=90?'A Grade':avg>=80?'B Grade':'C grade';
// console.log('Grade :'+grade);

// let avg = 90;

// if(avg>=90 && avg>=100){
//   console.log("A Grade");
// }
// else if(avg>=80 && avg>=89){
//   console.log("B Grade");
// }
// else if(avg>=70 && avg>=79){
//   console.log("C Grade");
// }
// else{
//   console.log("D Grade");
// }

// let person = ['Maya', 'Jaya', 'Tara', 'Katara', 'Inum'];

// console.log('For of loop')

// for(let i=0; i<person.length; i++) {
//   console.log(person[i]);
// }

// for(let per of person){
//   console.log(per);
// }

// let man = {
//   name : 'Arav',
//   age : 24,
//   place : 'Chennai',
//   contact : 9080382057
// }

// console.log('For in loop')

// for(let prop in man){
//   console.log(prop+' : '+man[prop]);
// }

// let a='6';
// let b=6;
// console.log(a!==b);

// //1. ODD OR EVEN

// function OddOrEven(num) {
//   if (num % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(OddOrEven(5));

// //2. ODD OR EVEN

// const OddorEven = (num) => {
//   return num % 2 == 0 ? 'Even':'Odd';
// }

// console.log(OddorEven(5));

// //3. ODD OR EVEN

// let number = 5;
// let result;

// if (number % 2 == 0) {
//   result = "Even";
// } else {
//   result = "Odd";
// }

// console.log(result);

//Do while cond

// let limit=5,i=1;

// do{
//   console.log(i);
//   i++;
// } while(i<=limit);

// // logical operator

// let Pmark = 35;
// console.log(Pmark>=35 && Pmark<=100);

// let choice = 4
// console.log( choice==8 || choice==4)

// choice=false;
// console.log(!choice);

// let x=5;
// console.log(x!=5);

// let x=3;
// x++;
// console.log("X : "+x);

// let i=3;
// const j=++i;
// console.log("X : "+i+", Y : "+j);

// let nums =[];
// for(let i=0;i<3;i++){
//   nums.push([]);
//   for(let j=0;j<3;j++){
//     nums[i].push(j);
//   }
// }
// console.log(nums);

// for(let i=1;i<=10;i++) {
//   // console.log(i);(b)
//   if (i==4){
//     // break;(b)
//     continue;
//   }
//   console.log(i);
// }

// function myFunction(p1, p2) {
//   return p1 * p2;
// }

// let result = myFunction(5, 33);
// console.log(result);

// function firstFunction() {
//   console.log("Inside firstFunction");
//   secondFunction();
// }

// function secondFunction() {
//   console.log("Inside secondFunction");
// }

// firstFunction();

// function add(a,b){
//   return a+b;
// }
// console.log(add(12,12));

// function add(a, b) {
//   const result = a + b;
//   console.log(result);

// }

// add(12, 12);

// function sum(){
//   let total =0;
//   for(let i=0;i<arguments.length;i++){
//     total+=arguments[i];
//   }
//   return total;
// }
// console.log(sum(12,12,12));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result=fruits.toString();
// console.log(result);

// function myCallback(){
//     console.log('I am callback');
// }
// function test(fun){
//     fun();
// }
// test(myCallback);

// not working{

// const add = (a,b) => a+b;
// console.log(add(12,12));

// const promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (success) {
//         resolve(result);
//     } else {
//         reject(error);
//     }
// });

// async function myAsyncFunction() {
//     try {
//         const result = await someAsyncOperation();
//         return result;
//     } catch (error) {
//         // Handle error
//     }
// }
//}not working

//Arrow function

// setTimeout(()=>{
//     console.log('hi');
// },3000);

// console.log('hie')

// const square = x => x*x;
// console.log(square(3))

// function example() {
//     const arrowFunc = () => {
//         console.log(arguments);
//     };

//     arrowFunc();
// }

// example(1, 2, 3);

//5. object 
// const people = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 30,
//         gender: "Male",
//         city: "New York",
//         country: "USA",
//         email: "john.doe@example.com"
//     },
//     {
//         firstName: "Alice",
//         lastName: "Smith",
//         age: 25,
//         gender: "Female",
//         city: "London",
//         country: "UK",
//         email: "alice.smith@example.com"
//     },
//     {
//         firstName: "Michael",
//         lastName: "Johnson",
//         age: 35,
//         gender: "Male",
//         city: "Los Angeles",
//         country: "USA",
//         email: "michael.johnson@example.com"
//     },
//     {
//         firstName: "Emily",
//         lastName: "Brown",
//         age: 28,
//         gender: "Female",
//         city: "Toronto",
//         country: "Canada",
//         email: "emily.brown@example.com"
//     },
//     {
//         firstName: "David",
//         lastName: "Wilson",
//         age: 40,
//         gender: "Male",
//         city: "Sydney",
//         country: "Australia",
//         email: "david.wilson@example.com"
//     },
//     {
//         firstName: "Sophia",
//         lastName: "Martinez",
//         age: 22,
//         gender: "Female",
//         city: "Madrid",
//         country: "Spain",
//         email: "sophia.martinez@example.com"
//     },
//     {
//         firstName: "Daniel",
//         lastName: "Lee",
//         age: 33,
//         gender: "Male",
//         city: "Tokyo",
//         country: "Japan",
//         email: "daniel.lee@example.com"
//     },
//     {
//         firstName: "Emma",
//         lastName: "Garcia",
//         age: 27,
//         gender: "Female",
//         city: "Paris",
//         country: "France",
//         email: "emma.garcia@example.com"
//     },
//     {
//         firstName: "James",
//         lastName: "Brown",
//         age: 45,
//         gender: "Male",
//         city: "Berlin",
//         country: "Germany",
//         email: "james.brown@example.com"
//     },
//     {
//         firstName: "Olivia",
//         lastName: "Taylor",
//         age: 32,
//         gender: "Female",
//         city: "Rome",
//         country: "Italy",
//         email: "olivia.taylor@example.com"
//     }
// ];

// people.forEach((value)=>{
//     console.log(value.firstName);    
//   }
// )
// people.forEach((value)=>{
//     console.log(value.country);    
//   }
// )
// /object

const OddorEven = (num) => {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

const inputNum = prompt("Enter a number:");
const num = parseInt(inputNum);
console.log(OddorEven(num));

// if (!isNaN(num)) {
//     const result = OddorEven(num);
//     alert(`The number ${num} is ${result}.`);
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }



























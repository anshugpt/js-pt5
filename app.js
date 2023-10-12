//* Object Literals
// used to store keyed collections & complex entities
// keyed collection --> property ==> (key, value) pair
// i.e -> Student info = 'name' -> "Anshu", 'age' -> 21, 'marks' -> 70
// key --> name, age, marks --> we call key because it access the value
// value --> "Anshu", 21, 70 --> this is value of the respective keys
// Objects are a collection of properties
// TODO: Read Docs on MDN about Object Literals

//* syntax :-
// there is no order to follow like array index
// if constant then it follow array referance
// means we can change key & value but can not change memory address
// generaly we use const in object laterals
// we can add an array in key & value

// const student = {
//     name: "Anshu",  
//     age: 21,        
//     marks: 70,
//     uniformColor: ["Blue", "White"]
// };

// TODO: Create a Object Literals of Post of Twitter

// const post = {
//     userName: "@anshugu99",
//     content: "This is my #FirstPost!",
//     likes: 45,
//     repost: 4,
//     tags: ["@anjalidr31", "@anushka0108", "@ushagu"]
// };

//* How to access your value :-
// there is two ways we can access our value
// 1st --> propertyName["keyName"]
// 2nd --> propertyName.keyName {Dot operator}

//* JS automatically converts objects keys to strings

//* Add/Update Value
// const student = {
//     name: "Anshu",
//     age: 21,
//     city:"Aurangabad"
// };
// To update value :-
// student.city = "Ranchi";
                               //* Simple Assiment operator uses
// To add value :-
// student.gender = "Male";

// To delete key & value :-
// delete student.age;

//* Object of objects
// nesting of objects

// const classInfo = {
//     anshu : {
//         grade: "A+",
//         city: "Dubai"
//     },
//     anjali : {
//         grade : "F",
//         city : "chor-bajar"
//     },
//     anushka : {
//         grade : "z-",
//         city : "garwa"
//     }
// };

// To access the value it the same way like other objects
//classInfo.anshu.city --> 'Dubai'


//* Array of Objects
// We can perform same operation like we did on objects & array
// just access the items and its simple

// const classInfo = [
//     {
//         name: "Anshu",
//         age: 21
//     },
//     {
//         name: "Anjali",
//         age: 18
//     },
//     {
//         name: "Anushka",
//         age: 21
//     }
// ];

//* Math Object
// based on math property :-

// Math.PI --> give pi value
// Math.E --> give the value of E

// based on methods :-

// Math.abs(n) -> return absolute value of n {(12) -> 12, (-12) -> 12}
// Math.pow(a, b) -> return a**b (a to the power of b)
// Math.floor(n) -> return round off value of n {(5.999999) -> 5} nearest smallest integer value par round off karta hai
// Math.ceil(n) -> return round off value of n to the nearest largest integer value {(5.5) -> 6}
// Math.random() -> return random number btw 0 to 1 (but do not return 1)

//* Random Number
// if we want to generate random num from 1 to 10 or more then :-

// Step 1 : let num = Math.random()
// Step 2 : num = num * 10              //* replace 10 with what you want to generate to.
// Step 3 : num = Math,floor(num)
// Step 4 : num = num + 1

// Shortcut Form

// let num = Math.floor(Math.random() * 10); //* Done :) (1 to 9)
// let num = Math.floor(Math.random() * 10) + 1; //* Done :) (1 to 10)

//* Practice Question
// Generate a random number btw 1 to 100

// let num = Math.floor(Math.random() * 100) + 1;

// Generate a number btw 1 to 5

// let num = Math.floor(Math.random() * 5) + 1;

//* Generate number btw 20 to 25

//* let num = Math.floor(Math.random() * 6) + 20;


// TODO: Guessing Game
// input from user (number)
// generate random number from 1 to that input by user
// take a guess from user 
// if user input is greater than that random number -> tell user that your number is greater than that number
// if user input is less than that number then tell user that your number is less than that of number

// let range = prompt("What's your range?")
// range = parseInt(range)
// let randomNum = Math.floor(Math.random() * range) + 1
// let guess = prompt("What's your Guess? (type 'Quit' for out of this game.)").toLowerCase()

// while(true){
//     if (guess === "quit"){
//         break;
//     }
//     if(guess == randomNum){
//         console.log("Correct!!");
//         break;
//     } else if (guess > randomNum){
//         console.log("Your guess is greater than number");
//     } else if(guess < randomNum){
//         console.log("Your guess is less than number");
//     }
//     guess = prompt("Try again or quit!");
// }
// console.warn("The game has ended!!");





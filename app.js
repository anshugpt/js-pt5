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



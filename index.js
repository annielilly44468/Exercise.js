
 let name2 = 'Annie';
console.log(name2);

// Cannot be a reserved keyword
// Should be meaningfull
// Cannot start with a number (6777Annie)
//Cannot contain space or hyphen
// Are case sensitive

let firstName = 'Annie';
let lastName = 'Grace';
console.log(firstName, lastName)

let decimal = 0.113232
 decimal = 1
 console.log(decimal)

 let abc = 'thisIsaNumber' +  0.221 
 console.log(abc)
 
let name = 'Annie'; // String literal
let age = 10; // Number literal
let isApproved = true; // Boolean literal
let FirstName = 'undefined';
let LastName = 'null';

let person = {
    name2 : "Annie",
    age : 10,
    pet : "Dog"
};
// Dot notation
person.name2 = 'Grace';
console.log(person.name2);

// Bracket notation
let selection = 'name2';
person [selection] = 'Mary';

console.log(person.name2);

let selectedColours = ['red', 'blue', 'yellow'];
selectedColours[3] = 'pink'
console.log(selectedColours);

//functions

function greet(name, lastName) {
    console.log('Hello ' + name + '' + lastName);
}

greet('John', ' Smith');
greet('Mary', ' Travis');

function onlyOdd () {
    for(i=1; i<11; i++){
        if (i % 2 == 1) {
        console.log(i)
        }
    }
} 

// calculating a value

function square(number) {
    return number * number;
}

let number = square(5);
console.log(number); // or it could be written as:
console.log(square(5)); 

// Strings

// String Primitive
const greetPeople = 'hi';

// String Object
 const another = new String('hi');
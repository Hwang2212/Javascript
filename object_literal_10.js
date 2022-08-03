// Declare a variable to store data
const person = {
    firstName: 'Sara',
    lastName: 'Smoth',
    age:30,
    email:'sara_smooth@gmail.com',
    address: {
        city: 'Kuala Lumpur',
        country: 'Malaysia',
    },
    course:['cloud','software']
}; // Objects use {}

// console.log(person);

let val;
// Get specific value
val = person.address;
val = person.firstName;
val = person.lastName;
val = person.email;
val = person.age;
val = person.course;

// OR
val=person['lastName'];

// Get value of object inside an object
val = person.address.city;

// Get values inside arrays
val = person.course[1];

const people = [
    {name:'Connor',age:12},
    {name:'Jack',age:32},
    {name:'Kim',age:21},
];

val = people[1].name;

// console.log(people);
console.log(val);
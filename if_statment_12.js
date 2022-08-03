// if(condition: Boolean true or false){
//     (true) action
// } else {
//     action for false
// }

// if (condition) {
//     do something;
// } else{
//     do something else;
// }

let id = 100;

// == disregards the datatype, only checks value

// Equal to
// if(id == 100){
//     console.log('Correct Number');
// } else {
//     console.log('Wrong Number');
// }

// Not equal
// if(id != 100){
//     console.log("Not equal to 100");
// } else {
//     console.log('Equal to 100');
// }

// Equal Value and Type
// if( id === 100){
//     console.log('Value & Type are same');
// } else{
//     console.log('value and type are not matching');
// }

// // Not Equal Value and Type
// if( id !== 100){
//     // console.log('Value & Type are not matching');
// } else{
//     console.log('value and type are same');
// }

// Check for Undefined
// if(id !== undefined){
//     console.log(`The Id is ${id}`);
// } else {
//     console.log('No Id');
// }

// if(id === undefined){
//     console.log('No Id');
// } else {
//     console.log(`The id is ${id}`);
// }

// // Greater than or less than
// if(id >=100){
//     console.log('Correct');
// } else{
//     console.log('Incorrect');
// }


const color = 'red';
if (color === 'red') {
    console.log('red color');
} else if(color === 'yellow'){
    console.log('Color is Yellow');
} else{
    console.log('try again');
}


// Logical Operators
const nationality = 'Malaysia';
const age = 78;
const userName = 'Awe';

// // AND &&
// if (nationality === 'Malaysia' && age >= 18) {
//     console.log('You\'re registered!');
// } else {
//     console.log('You are not eligible');
// }

// OR ||
if ((age < 18 || age > 60)) {
    console.log(`You\'re not eligible Mr. ${userName}`);
} else {
    console.log(`You\'re eligible Mr. ${userName}`);
}

// Ternary Operators
console.log(id === 100 ? 'Correct' : 'Not correct');

// console.log(condition ? 'Correct Action' : 'False Action');
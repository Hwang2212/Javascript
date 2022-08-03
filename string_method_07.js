const firstName = 'Sara';
const lastName = 'Johny';
const age = 30;
const text = 'welcome to css';
const topics = 'web design, digital marketing, cyber security';

let val;

val = firstName + lastName;
val = firstName+' '+lastName;

// append
val = 'Andy';
val += ' Hwang';

val = 'Hello my name is '+firstName + ' '+ 
'and my last name is '+lastName;

// Escaping
// val = "'Thats awesome, I can't wait"; 
// Can use double quote,  but use the next line
val = 'That\'s awesome, I can\'t wait!' //add "\" to the '

// Length
val = firstName.length;

// concat (Another method to cut it out)
val = firstName.concat(' '+lastName);

// Change Case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// indexOf: get index number of alphabets
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// charAt() : Get position of character
val = firstName.charAt('2');

// Get Last character
val = firstName.charAt(firstName.length -1);

// replace(): Replace characters
val = text.replace('css','javascript');

// Slice method >= and <
val = firstName.slice(1,2);
val = firstName.slice(-3);

// Split sentences
val = topics.split(',',3);

// Includes: Check whether the character is present or not
val = text.includes('welcome');

console.log(val);

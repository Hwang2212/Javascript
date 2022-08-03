// Create arrays
const numbers = [34,85,22,33,11,88];
const colors = ['pink','green','blue','silver'];
const numbers2 = new Array(22,33,44,55,66);
const mixed = [22,'Hello String',null,undefined,
    true,false,[1,2,3],{a:1,b:2,c:"22"}, new Date()];

let val;
// Here will be structuring data
// Glint

// Get array length
// val = numbers.length;

// // Check if is array
// val = Array.isArray(numbers2);

// // Get Single Value
// val = numbers[3];
// val = numbers[6];

// // Insert Value to an array
// numbers[2]=250; //Can use this method to change 
// values inside const array
// val = numbers;

// // Find index number
// val = numbers.indexOf(11);

// // Manipulate an array
// // Add value to end of an array
// numbers.push(500);
// val=numbers;

// // Add value to beginning of array
// numbers.unshift(300);
// val=numbers;

// // Remove value from end of array
// numbers.pop();
// val=numbers;

// // Remove the value from the beginning
// numbers.shift();
// val=numbers;

// // Splice
// numbers.splice(1,4)
// val=numbers;

// // Reverse
// numbers2.reverse();
// val = numbers2;

// // Concat Array
// val = numbers2.concat(colors);

// Sort an array
val = numbers.sort();

// Compare function
val = numbers.sort(function(a,b){
    return a-b;
}); //Ascending order

val = numbers.sort(function(a,b){
    return b-a
}); //Descending Order

// Find
function over90(num){
    return num > 90
}
val =numbers.find(over90);

console.log(val);
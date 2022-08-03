let val;

const today = new Date();

// When a function is a property of an 
// object, it is a method
val = today.getDate();
val = today.getDay();

val =  today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();
val = today.getSeconds();
val = today.getMinutes();
val = today.getMonth();

console.log(val);
let val1, val2, val3, val4, val5, val6;
let val7, val8, val9, val10, val11, val12;

// Convert number to string
val1  = String(555);
console.log(val1);
val2  = String(4+4);
console.log(val2);

// Boolean to String
val3 = String(true);
console.log(val3);

// Date to String
val4 = String(new Date());
console.log(val4);

// Array to string
val5 = String([1,2,3,4,5]);
console.log(val5);

// toString()
val6 = (5).toString();
val7 = (true).toString();
console.log(val6);
console.log(val7);

// String to Number
val8 = Number("5");
console.log(val8);

// Boolean to Number
val9 = Number(true);
val10 = Number(false);
console.log(val9);
console.log(val10);

// Null to Number
val11 = Number(null);
console.log(val11);

// String to Number
val12 = Number('Hello'); //Will return NaN
console.log(val12);
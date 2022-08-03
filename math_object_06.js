const num1 = 80;
const num2 = 21;

let val;

// Simple Math with Numbers
val  = num1+num2;
val = num1 - num2;
val = num1/num2;
val = num1 * num2
val = num1%num2;


// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.2); //Will round to 3
val = Math.floor(2.8); //Floor will always round to 2
val = Math.sqrt(64);
val = Math.abs(-3);
// val = Maths.pow(8,2); //pow = Power of n
val = Math.min(1,2,43,6786,10000.-1.-102932932);
val = Math.max(1,2,43,6786,10000.-1.-102932932);
val = Math.random();
val = Math.floor(Math.random() * 20 +1); 
// *a +b : Will return numbers between b to a

console.log(val);
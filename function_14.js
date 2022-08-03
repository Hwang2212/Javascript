// 4 ways to define a function
// 1st Function declaration
// function greeting (firstName='John', lastName='Doe'){

//     // Below is setting up default value pre-ES6
//     // if(typeof firstName === 'undefined'){
//     //     firstName = 'Kim'
//     // }
//     // if(typeof lastName === 'undefined'){
//     //     lastName = 'Doe'
//     // }

//     return `Hello ${firstName} ${lastName}`
// }

// function welcome() {
//     console.log('Welcome to Airasia Academy!');
// }

// Parameters are placeholder
// If I place 'Sara', it is considered a "Argument"!!
// console.log(greeting('Sara'));
// welcome(); // Can call function without implementing return

// 2nd Function Expression
// Store function in a variable
// Method 2
// const sqr = function (x=2) {
//     return x*x;
// };
// console.log(sqr(5));

// Method2:
// const sqr1 = function(x=3){
//     console.log(x*x);
// }

// sqr1();

// 3rd IIFEs (Immediately Invokable Function Expressions)
// IIFEs start with (1st)(2nd); where 1st is declaring 
// function, 2nd is Parameters or Arguments

(function(){
    console.log('Hello from IIFEs...');
})();

(function(userName='Koma'){
    console.log('Welcome '+userName);
})('Kim');

// 4th Function as property method
const todo = {
    add: function () {
        console.log('Add todooooooo'); // add is the name, 
        // so no need to add
    },
    edit: function () {
        console.log('Edit todooooooo');
    }
}

todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit();
todo.delete();
console.log(todo);
// // For loop

// for(let i =0; i < 100; i+=5){
    
//     if (i === 20) {
//         console.log(i + 'is my fav number');
//         continue;
//     } 

//     if (i === 35) {
//         console.log('Stop the loop');
//         break;
//     }

//     console.log('Number '+i);
// }

// While Loop
// let i = 0;

// while(i<10){
//     console.log('Number ' +i);
//     i++;
// }


// Dowhile
// let i=2;
// do{
//     console.log('Number '+ i);
//     i--
// } while(i>-50);

// Loop an array
const colors = ['red','yellow','blue','green']

// for(let i = 0; i < colors.length;  i++){
//     console.log(i +':'+colors[i]);
// }

// forEach

colors.forEach(function(color){
    console.log(color);
});
const firstName = 'Sara';
const age = 21;
const job = 'Developer';
const city = 'Kuala Lumpur';

let val;

// Passing HTML Tags in JavaScript

// Without template literals
val = '<ul>' + 
'<li>FirstName: '+firstName+ '</li>'+
'<li>Age: '+age+ '</li>'+
'<li>Job: '+job+ '</li>'+
'<li>City: '+city+ '</li>'+
'</ul>';

// With template literals Use BackTick ``
val = `
 <ul>
    <li>FirstName: ${firstName}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>
`
document.body.innerHTML=val;
console.log(val);
const color = 'yellow';

// If there are many conditions, 
// use SWITCH instead of ifelse statement

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'green':
        console.log('color is green');
        break;
    
    default:
        console.log('Try again'); 
        // No need to add break; as default is the final line
}
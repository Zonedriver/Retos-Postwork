let person1 = 'John Doe';
let person2 = 'Jane Doe';

/*let tmp = person1;
person1 = person2;
person2 = tmp;*/

//destructuring
[ person1, person2 ] = [ person2, person1 ];

console.log(`Person 1: ${person1}
Person 2: ${person2}`); 
// Jane Doe
// John Doe

//intercambio de valores
const colors = [ 'Red', 'Blue', 'Yellow' ];
[colors[0], colors[2]] = [colors[2], colors[0]]

console.log(colors)
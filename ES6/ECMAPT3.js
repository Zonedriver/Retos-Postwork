//Destructuring

//array
const colors = ['Red', 'Blue', 'Yellow']

const [ red, blue, yellow ] = colors;

console.log(red); // Red
console.log(blue); // Blue
console.log(yellow); // Yellow


//object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'Latveria'
  };
/*sin  
const firstName = person.firstName;
const lastName = person.lastName;*/
 
//con
const {firstName, lastName, country} = person

 console.log(firstName,lastName,country); // John Doe
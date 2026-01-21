// React BootCamp 
var x = 7;
function getName() {
  console.log("John Doe");
}
getName()
console.log(x);

//..........................................................
// getName(); // Namaste Javascript
// console.log(x); //undefined
// console.log(getName);// retun the function

// var x = 7;

// function getName() {
//   console.log("Namaste Javascript");
// }
//.................................................
getName(); // Namaste Javascript
console.log(x); //x is not defined



function getName() {
  console.log("Namaste Javascript");
}
//.................................
getName(); // Now getName will behave like a variable coz its an arrow function
console.log(x); //undefined
console.log(getName);// retun the function

var x = 7;

const getName = () => {
  console.log("Namaste Javascript");
}
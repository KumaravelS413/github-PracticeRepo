// 13/01/2026
// Operators

//1. Arithmetic Operators
var a = 10;
var b = 5;

var c = a + b; // Addition
console.log("Addition: " + c);

var c = a - b; // Subtraction
console.log("Subtraction: " + c);   

var c = a * b; // Multiplication
console.log("Multiplication: " + c);

var c = a / b; // Division
console.log("Division: " + c); // Quotient


var c = a % b; // Modulus
console.log("Modulus: " + c); // Remainder

var c = b % a; // Modulus
console.log("Modulus: " + c); // Remainder

var c = a ** b; // Exponentiation
console.log("Exponentiation: " + c); // Power Root 10^5


// 2. Assignment Operators
var a = 20; // Assignment
var b = 10;

a = a + b; // a = 20 + 10
console.log("a = a + b: " + a);

a += b; // a = a + b
console.log("a += b: " + a);

a -= b; // a = a - b
console.log("a -= b: " + a);

a *= b; // a = a * b
console.log("a *= b: " + a);    

a /= b; // a = a / b
console.log("a /= b: " + a);

a %= b; // a = a % b
console.log("a %= b: " + a);

console.log("a:" + a);
console.log("b:" + b);

b %= a; // a = a % b
console.log("b %= a: " + b);

a = 20
b = 3
a **= b; // a = a ** b
console.log("a **= b: " + a);

// 3. Comparison Operators --> == && ===  will be the interview questiosn

var a = 100;
var b = "100";

console.log(a == b); // Equal to // It willl be check loosely content (only value)

console.log(a === b); // Strict Equal to // It willl be check strictly typeof value (value + data type)

console.log(a > b); // Greater than

console.log(a >= b); // Greater than or Equal to

console.log(a < b); // Less than   

console.log(a <= b); // Less than or Equal to

console.log(a != b); // Not Equal to

console.log(a !== b); // Strict Not Equal to

     
// 4. Logical Operators

// && AND , || OR , ! NOT

let age = 18;

if(age >= 18 && age <= 60){
    console.log("Eligible");
}

age = 19;
if(age < 18 || age <= 60){
    console.log("Not Eligible");
}

let abc 
if(!abc){
    console.log("Value is undefined");
}

abc = 10
if(abc){
    console.log("Value is defined");
}

if(!abc){
    console.log("Value is defined"); // it will not run since abc has value
}

// 5. Ternary Operator ?: -->  only ? it will be asked in interview. Its called ternary operator.

let marks = 40;
let result = (marks >= 35 && marks === '40') ? "Pass" : "Fail";
console.log("Result: " + result);

marks = 40;
 result = (marks >= 35 && marks === 40) ? "Pass" : "Fail";
console.log("Result: " + result);


//6. Unary Operators

// Pre / post Increment
 var a = 100;
  console.log(a++); // Post Increment
   console.log(a); 

 console.log(++a); // Pre Increment

 // Pre / post Decrement
 var b = 50;
 console.log(b--); // Post Decrement
 console.log(b);        

 console.log(--b); // Pre Decrement

// Control Statements
// if , if else , nested if , switch , break , continue , return
var mark = 44;

if(mark >= 80){
    console .log("A Grade");
}
else if(mark >= 60){
    console .log("B Grade");
}   
else if(mark >= 40){
    console .log("C Grade");

    if(mark >= 45){
        console .log("Eligible for next class");  // Nested IF 
    }
    else{
        console .log("Not Eligible for next class");
    }   
}
else{
    console .log("Fail");
}

// Switch Case // Break is mandatory in switch case to avoid fall through
var day = 10;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Its Weekend");
        break;
}

// return statement // Returning value from function
function add(a, b){
    return a + b; // return statement
}
console.log("Sum: " + add(10, 20));
function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }   
}
console.log("Is 10 even? " + isEven(10));
console.log("Is 7 even? " + isEven(7));
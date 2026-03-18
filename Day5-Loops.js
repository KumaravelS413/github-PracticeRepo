// Loops    
// For Loop --> Initialization, Condition, Increment/Decrement
console.log("For Loop:");
for(var i = 1; i <= 5; i++){
    // 1<= 5 =1 ; i++ =>2
    // 2<= 5 =1 ; i++ =>3
    // 3<= 5 =1 ; i++ =>4
    // 4<= 5 =1 ; i++ =>5
    // 5<= 5 =1 ; i++ =>6
    // 6<= 5 ; exit loop
    console.log(i);
}

// While Loop 
// Initialization, 
// Condition, 
// Increment/Decrement
console.log("While Loop:");
var j = 1; // Initialization
while(j <= 5){ // Condition

    // 1<=5 =1 ; i++ =>2
    // 2<=5 =1 ; i++ =>3
    // 3<=5 =1 ; i++ =>4
    // 4<=5 =1 ; i++ =>5
    // 5<=5 =1 ; i++ =>6
    // 6<=5 ; exit loop
    console.log(j);
    j++; // Increment
}

console.log("Do While Loop:");
// Do While Loop
// Initialization
// increment/Decrement
//condition
var k = 1; // Initialization
do{
    console.log(k);
    k++; // Increment
}while(k <= 5);

// forof Loop
console.log("For Of Loop:");
var arr = [10, 20, 30, 40, 50, 60, 70];

for (const element of arr) {
    
    console.log(element);
}

for(let a=0; a < arr.length; a++){
    console.log(arr[a], a);;
}

console.log("foreach Loop:");
var arr1 = [10, 20, "Mugesh", false, 5.32, true, 9.86, "Hello"];
// foreach Loop
arr1.forEach(function(value, index){
    console.log(value, index);
});

// For in:
console.log("For In:");

var obj = {
    name: "Mugesh",
    age: 24,
    city: "Chennai",
    isMarried: false,
    height: 5.9
};

for (const key in obj) {
    
    console.log(key + " : "+ obj[key]);
}


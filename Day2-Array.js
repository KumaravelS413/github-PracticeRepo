// 10/01/2026
//  Array Methods
// Index starts from 0, 1, 2, 3 ..... n
// Lengt starts from 1, 2, 3 ..... n

// let a = new Array() // Old method

var arr = [10, 20, "playwright", false, [101, 202, "javascript", true]]

console.log(arr)

console.log(arr[2])
console.log(arr.length) // property
console.log(arr[4])
console.log(arr[4][1]) // two dimensional array
console.log(arr[10])

// Push --> adds values at end/last
var arr =[10, 20, 'javascript', 30, true]
arr.push(100, 200, false)
console.log(arr)

// Pop  --> Removes value at end/last
arr.pop() 
console.log(arr)

//Shift --> Removes value at start /1st
arr.shift()
console.log(arr)

// UnShift  --> adds values at start /1st
arr.unshift('unshift', true)
console.log(arr)

// Concat
var arr1 = [1,2,3]
let arr2 = [4,5,6]
const arr3 = [7,8,9]

console.log(arr2.concat(arr1, arr3))
console.log(arr1, arr2, arr3)
console.log(arr1 + arr2+ arr3)


// ToString
var arr = [101, 500, 'java', 299, "selenium"]

var store = arr.toString()
console.log(store)

// Splice - based on starting index, DeleteCount, ....Values
var arr = [100, 200, 300, 400, 500, 600]

// Remove
arr.splice(2, 3) // 2 is Index and  is count how many count need to be deleted.
console.log(arr)

//add
arr.splice(2, 0, 10, 'javascript', true) //  0 Zero is must to only use add
console.log(arr)

// Replace
arr.splice(3, 1, 'java', "mugesh", true)
console.log(arr)



// Reverse
var arr = [1, 2, 'javascript', true, 100, 200]
arr.reverse()
console.log(arr)




//Map - Transformater
var arr = [4, 9, 19, 25, 36, 49.24, 'tej']
var store = arr.map(Math.sqrt)
console.log(store)

var store = arr.map(function(v){
    return v + 2
})

console.log(store)




// Filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var store = arr.filter(function(v){
    return v % 2 != 0
})

console.log(store)


var store = arr.map(function(a){
    return a % 2 == 0
})

console.log(store)


var store = arr.filter(function(v){
    return v + 2
})

console.log(store)


// Reduce
var arr = [10, 20, 30, 40, 50]
var store = arr.reduce(function(num1, num2){
    return num1 + num2
}, 0) // 0 is by deafult if needed we can add any numers

console.log(store)

// Num1 0 + num2 10 = 10
// Num1 10 + num2 20 = 30


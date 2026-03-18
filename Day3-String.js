// 12/01/2026

// String Methods

var str = "javascript programming";

console.log(str)
console.log(str.length); // property


// SLICE -- based on starting index between ending index +1

var str = "javascript programming";

var store = str.slice(0, 10); // 10+1
console.log(store)

var store = str.slice(11, 22);
console.log(store)

var store = str.slice(-22, -11); 
//"javascript programming" --> In reverse -22 to 0
//-22, -21, to -1, 0
console.log(store)

// Sub String

var  store = str.substring(11, 22)
console.log(store)

var store = str.substring(-22, -11)  // This will return empty string / only space.
console.log(store)

// Repalce
var str = "Javascript programming Java selenium javascript";
var store = str.replace("Java", "Type"); // only first occurance will be replaced
console.log(store)

// Repalce All
var str = "Javascript programming Java selenium javascript";
var store = str.replaceAll("Java", "Type"); // all occurance will be replaced
console.log(store)

// toUpperCase
var str = "Javascript";
console.log(str.toUpperCase())

// toLowerCase
var str = "PLAYWRIGHT";
console.log(str.toLowerCase())

// Index of
var str = "javascript programming"
console.log(str.indexOf("a")) // first occurance
console.log(str.indexOf("as")) 

// last Index of
console.log(str.lastIndexOf("a")) // last occurance
console.log(str.lastIndexOf("as"))

// charAt
console.log(str.charAt(1))

// trim
var str = "     javascript    with    Playwright    "
console.log(str.trim())

console.log(str.trimEnd())
console.log(str.trimStart())

// Boolean Methods
var str = "javascript with Playwright"

// Includes
console.log(str.includes("z")) // false
console.log(str.includes("j")) // true

// Starts With
console.log(str.startsWith("j")) // true
console.log(str.startsWith("J")) // false

// ends With
console.log(str.endsWith("t")) // true
console.log(str.endsWith("T")) // false


// Split
var str = "mugesh@gmail.com"
console.log(str.split("@"))
console.log(str.split("a"))

// Concat
var str1 = "javascript "
var str2 = "Playwright " 
var str3 = ` Selenium`
console.log(str1.concat( str2, str3)) 
console.log(str1+ str2 + str3)
console.log(str1.trimEnd(), str2.trimEnd(), str3.trim())

// Repeat
var str = "javascript ==>"
console.log(str.repeat(5))

// Reverse String
var str = "mugesh@123" 
var revStr = str.split("").reverse().join("")
console.log(revStr)
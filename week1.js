// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log("My first name is " + firstName + " and my lastname is " + lastName)
// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2


console.log(number + parseInt(year))




// --------------------------------------


// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const resultOne = Number(numberOne) + Number(numberTwo);
// console.log(resultOne);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)


console.log(sum.toFixed(2))


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avg = one+two+three/3
console.log(avg.toFixed(5))




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letterC = letters.charAt(2)
const letterCOther = letters.charAt(letters.length-1)

console.log(letterC)
console.log(letterCOther)



// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = fact.replace("j", "J")

console.log(newFact) 

// --------------------------------------


// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };

// Log the message 
console.log(myObj.message)

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const person = {name: "Mark", age: 28}
console.log(person.name)
console.log(person.age)

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};



// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true

console.log(stackOverflow.isAllowed)

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description

thisSong.about = "Just a tribute"

console.log(thisSong.description)
console.log(thisSong.about)


// --------------------------------------

// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters02 = ["a","b","c"];
// show b in the console 

console.log(letters02[1])


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.
const friend1 = {name: "friend01"};
const friend2 = {name: "friend02"};
const friend3 = {name: "friend03"};

friends.push(friend1, friend2, friend3)

console.log(friends)


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const pos = significantMathNumbers.indexOf(1729)
console.log(pos)

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
diet.splice(2,0,"hamburger","soda","pizza")

console.log(diet)


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()
console.log(diet)



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = Array.from(diet)
diet.pop()
console.log(diet)
console.log(dinnerTray)


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
for(i = 1; i < lettersExpanded.length; i = i+2){
    console.log(lettersExpanded[i])
}



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(i = 0 ; i < numbers.length; i++){
    if(numbers[i] >6 || numbers[i] <0){
        console.log(numbers[i])
    }
    else{
        discardedNumbers.push(numbers[i])
    }
}
console.log(discardedNumbers)


// --------------------------------------



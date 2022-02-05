// this is a file//
/* this is not a file */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
 studlyCapVar= 10;
 properCamelCase= "A String";
 titleCaseOver= 9000;
 let catName = "Oliver";
let catSound = "Meow!";
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact);
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 87;
myVar++;
let myVar = 11;
myVar --;
const myDecimal =5.7;
const product = 1.0 * 5.0;
const quotient = 4.4 / 2.0;
const remainder = 11 %3;
let a = 3;
let b = 17;
let c = 12;
a +=12;
b +=9;
c +=7;
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *=3;
c *= 10;
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;
const myStr ="I am a \"double quoted\" string inside \"double quotes\".";
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const myStr = 
"FirstLine\n\t\\SecondLine\nThirdLine";
const myStr = "This is the start." + " This is the end.";// Change this line
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
const myName = "abc";
const myStr = "hi, name " + myName + ",efg";
const someAdjective = "abc";
let myStr = "Learning to code is ";
myStr += someAdjective;
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // Change this 
let myStr = "Jello World";
myStr = "Hello World"; // Change this line
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; // Change this line
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this lineconst lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks  =  myNoun +", " + myAdjective +", " + myVerb + ", " + myAdverb + ", " ;// Change this line
const myArray = ["peanut butter",10];
const myArray = [["ram"],[10]];
const myArray = [50, 60, 70];
myArray[0];
const myData = myArray[0];
const myArray = [18, 64, 99];
myArray[0] =45;
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])
const myList = [["Banana", 3], ["Apple", 4], ["Orange", 5], ["Peach", 6], ["Pineaple", 7]];
function reusableFunction()
{ 
console.log("Hi World");


}
reusableFunction();
function functionWithArgs(a,b) {
    console.log(a+b);
    }
    functionWithArgs(1,2);
    functionWithArgs(7,9); 
    function timesFive(num) {
        return num * 5;
      }
      
      var answer = timesFive(2);
      let myGlobal = 10;
oopsGlobal = 5;

function fun1(myGlobal) {
  // Assign 5 to oopsGlobal Here
  var output = "";
  if (typeof myGLobal != "undefined") {
output += "myGlobal: " + myGlobal;
  }
  if (typeof myGlobal != "undefiend") {
output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
    'use strict';
  
    var myVar = "Hello";
  
    console.log(myVar);
  }
  myLocalScope();
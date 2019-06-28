

// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev"

// 1. Write the code that returns 'B' from mantra.
console.log(mantra[0]);
// 2. Write the code that determines if there is a 'x' in mantra.
function ifX(str){

  return str.indexOf("x") >= 0

}
console.log(ifX(mantra));
// 3. Write the code that determines if there is a 'v' in mantra.
function v(str){
  return str.indexOf("v") >= 0
}
console.log(v(mantra));
// Stretch: Write the code that returns the position of 'v' in mantra.
console.log(mantra.indexOf("v"))

// Consider the following statement:

var codingIsEasy = true
var imBored = true


if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}


// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

for(let i = 0; i < mantra.length; i++){
  console.log(mantra[i])
}


console.log("for/while");
// Stretch: Using a while loop.
let i = 0
while (i < mantra.length){
  console.log(mantra[i]);
  i++
}
// Super Stretch: Using forEach().

// Consider the following variable:

var message = "thisisateststring"

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function noVowel(str){
  var vowel = "aeiou"
  var answer = ""
  for(let i = 0;i < str.length; i++){
    let c = str[i]
    if(vowel.indexOf(c) === -1){
      answer += c
    }
  }
  return answer
}

console.log(noVowel(message));
// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

function cats(arr){
  var answer = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i].animal === "cat")
       answer.push(arr[i]);
  }
  return answer
}

console.log(cats(toonimals))
// daily challenge

// CHALLENGE 1

// Prompt the user for their first name
var myName = window.prompt("what is your first name");
console.log("Hello", myName)

// Store their input to a variable
document.getElementById("myButton").onclick = function () {
  const FName = document.getElementById("myTextF").value;
  document.write("hello " + FName);
};
// Reverse your user’s name

function Revers(str) {
    var x = str.split(" ").reverse().join(" ")
    alert(x);
    console.log(x)
    
}
Revers("abebe kebede")




// alert the reversed string



// Challenge 2
// Prompt for a number value (provide a default of 10)
const t = Number(prompt("my first value is",  10));

// Prompt for a second number value (provide a default of 10)
const t2 = Number(prompt("my first value is", 10));

// Convert the prompted values into integers using parseInt()
const t3 = parseInt(t)
console.log(t3)

// Add the numbers together and alert the user with the result
var add = t + t2;
alert(add)
console.log(add)

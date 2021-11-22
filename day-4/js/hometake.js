// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number


// function validate() {
//   //let red = /\bJoh?n(athan)?Doe\b/g
//   if (!document.form1.txtInput.value.match(/^[0-9]/)) {
//     alert("please enter vaild value");
//   } else {
//     alert("success");
//   }
// }

function registerName() {
  userInput = document.getElementById("input").value;
  if (!isNaN(userInput)) {
    alert("Is a number");
  } else {
    alert("Is not a number");
  }
}

// function registerName() {
//   if (!input.value) {
//     alert("please enter a name");
//     return;
//   }
//   user.name = input.value;
//   input.value = "";
//   alert("Thank you " + user.name + "!");
// }

// ********Daily Challenge*******
// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function





// function registerName() {
//   var a = document.getElementById("input").value;
//   if (a % 2 == 0) {
//     alert("even");
//   } else {
//     alert("odd");
//   }
// }

// *****************Take Home Challenge**********

// Write a function that accepts a password (string)
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected



function validate() {
  // const re = /[a-z]/;
  if (!document.form1.txtInput.value.match(/^[a-z]\w{6,20}/)) {
    alert("please enter vaild value");
  } else {
    alert("success");
  }
}

//******* Take Home Challenge ******

// form.addEventListener("submit", (e) => {
//   if (password.value.length <= 6 || password.value.length >= 20 ) {
//     alert("password must be more than 6 and less than 20 characters");
//     alert("rejected");
//   } 
//   if (!isNaN(password.value)) {
//     alert("password must start with a letter");
//     alert("rejected");
//   } else {   
//     alert("Form is accepted");
//   }


  
// })





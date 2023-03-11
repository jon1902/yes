
// Get the login and password input fields and the login button
const loginInput = document.getElementById("mail") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const myButton = document.getElementById("myButton");


// const loginToCheck = loginInput.value;
// const passwordToCheck = passwordInput.value;

// // Get the stored login and password data from local storage
// const storedData = localStorage.getItem("loginData");

// // Check if the stored data exists and if the login and password match
// if (storedData) {
//   const loginData = JSON.parse(storedData);

//   if (loginData.some(data => data.login === loginToCheck && data.password === passwordToCheck)) {
//     console.log("Login successful.");
//     // TODO: Add logic to redirect the user to the main app page
//   } else {
//     console.log("Login failed. Invalid login or password.");
//   }
// } else {
//   console.log("Login failed. No login data found.");
// }




if(myButton && loginInput && passwordInput)
// Add an event listener to the login button
myButton.addEventListener("click", function() {
 // Get the login and password values entered by the user
 const loginToCheck = loginInput.value;
 const passwordToCheck = passwordInput.value;


 // Get the stored login and password data from local storage
 const storedData = localStorage.getItem("loginData");

 // Check if the stored data exists and if the login and password match
 if (storedData) {
   const loginData = JSON.parse(storedData);

   if (loginData.some(data => data.login === loginToCheck && data.password === passwordToCheck)) {
      window.location.href ="/homepage/homepage.html";
     
     // TODO: Add logic to redirect the user to the main app page
   } else {

  const errorMessageElement = document.getElementById('error-message') as HTMLDivElement;

  const errorMessage = "Login failed. Invalid login or password.";
  errorMessageElement.innerText = errorMessage;
  console.log("Login failed. Invalid login or password. or No login data found")
    //  console.log("Login failed. Invalid login or password. or No login data found");
   }
 } else {
  const errorMessageElement = document.getElementById('error-message') as HTMLDivElement;

  const errorMessage = "Login failed. Invalid login or password.";
  errorMessageElement.innerText = errorMessage;
   console.log("Login failed. No login data found.");
 }
});






// //  If login data exists in local storage, parse it from the JSON string
// if (loginDataString) {
//   loginData = JSON.parse(loginDataString);
// }

// //  Push the new login data item into the array
// loginData.push({ login, password });

// // Convert the updated login data array to a JSON string
// const updatedLoginDataString = JSON.stringify(loginData);

// //  Save the updated JSON string back to local storage
// localStorage.setItem("loginData", updatedLoginDataString);

//  Check if the login and password data exists in the array
// const loginDataExists = loginData.some(
//     (data) => data.login === login && data.password === password
//   );
  
//   if (loginDataExists) {
//     console.log("Login and password data exists in local storage.");
//   } else {
//     console.log("Login and password data does not exist in local storage.");
//   }
  

//   // Save the login and password values to local storage
//   localStorage.setItem("mail", login);
//   localStorage.setItem("password", password);
// });

// function handleLogin() {
//     const email = localStorage.getItem("email");
//     const password = localStorage.getItem("password");
  
//     if (!email || !password) {
//       setErrorMessage("Email or password not found.");
//       return;
//     }
// }
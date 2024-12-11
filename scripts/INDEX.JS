// DIPCOM MULTINATIONAL OFFICIAL WEBSITE
// COPYRIGHT (C) DIPCOM MULTINATIONAL 2024
// JAVASCRIPT

import { btn } from "../scripts/data/CLASSES.JS";
import { userName } from "../scripts/data/CLASSES.JS";
import { userEmail } from "../scripts/data/CLASSES.JS";
import { userPassword } from "../scripts/data/CLASSES.JS";
import { api } from "../scripts/data/CLASSES.JS";
import { errorFetched } from "../scripts/data/CLASSES.JS";

// FORM VALIDATIOPN START

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "" || userEmail.value === "" || userPassword === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Name, email and password are required";
  } else if (userName.value === "") { 
    api.innerHTML = "";
    errorFetched.innerHTML = "Name is required";
  } else if (userEmail.value === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Email is required";
  } else if (userPassword === "") { 
    api.innerHTML = "";
    errorFetched.innerHTML = "Password is required";
  } else if (userName.value === "" && userEmail.value === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Name and email are required";
  } else if (userName.value === "" && userPassword.value === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Name and password are required";
  } else if (userEmail.value === "" && userPassword.value === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Email and password are required";
  } else if (userPassword.value.length <= 9) {
    api.innerHTML = "";
    errorFetched.innerHTML = "Password to short.";
  } else if (userPassword.value.length >= 30) {
    api.innerHTML = "";
    errorFetched.innerHTML = "Password to long.";
  } else {
    api.innerHTML = `<h1>HELLO ${userName.value}! Thanks folr joining us!</h1>`;
    alert("Hello " + `${userName.value}` + " ! Welcome to DipCom MULTINATIONAL. Let's get started")
    errorFetched.innerHTML = "";
  }
  setTimeout(() => {
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    api.innerHTML = "";
    errorFetched.innerHTML = "";
  }, 10000);
});

// FORM VALIDATION END

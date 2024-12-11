// DIPCOM MULTINATIONAL OFFICIAL WEBSITE
// COPYRIGHT (C) DIPCOM MULTINATIONAL 2024
// JAVASCRIPT

import { btn } from "../script/data/CLASSES.JS";
import { userName } from "../script/data/CLASSES.JS";
import { userEmail } from "../script/data/CLASSES.JS";
import { userPassword } from "../script/data/CLASSES.JS";
import { api } from "../script/data/CLASSES.JS";
import { errorFetched } from "../script/data/CLASSES.JS";

// FORM VALIDATIOPN START

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "" || userEmail.value === "" || userPassword === "") {
    api.innerHTML = "";
    errorFetched.innerHTML = "Name, email and password are required";
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

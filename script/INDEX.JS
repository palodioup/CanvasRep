// DIPCOM MULTINATIONAL OFFICIAL WEBSITE
// COPYRIGHT (C) DIPCOM MULTINATIONAL 2024
// JAVASCRIPT

import { btn } from "./data/CLASSES.JS";
import { userName } from "./data/CLASSES.JS";
import { userEmail } from "./data/CLASSES.JS";
import { userPassword } from "./data/CLASSES.JS";
import { api } from "./data/CLASSES.JS";
import { errorFetched } from "./data/CLASSES.JS";
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
    api.innerHTML = `<h1>HELLO ${userName.value}! Thanks for joining us!</h1>`;
    alert(
      "Hello " +
        `${userName.value}` +
        " ! Welcome to DipCom MULTINATIONAL. Let's get started"
    );
    errorFetched.innerHTML = "";
    let text = "Hello " + `${userName.value}, ${userEmail.value}, ${userPassword.value}`
    function func_savedata(data) {
      var string_data = data;
      var file = new File([string_data], "user.txt", {
        type: "text;charset=utf-8",
      });

      var anchor = document.createElement("a");
      anchor.setAttribute("href", window.URL.createObjectURL(file));
      anchor.setAttribute("download", "note.txt");
      anchor.click();
      URL.revokeObjectURL(anchor.href);
    }
    func_savedata(text);
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
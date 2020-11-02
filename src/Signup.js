"use strict";

class Signup {
  constructor() {
    // input elements
    this.usernameInput = document.querySelector("#username");
    this.emailInput = document.querySelector("#email");
    this.repeatEmailInput = document.querySelector("#repeat-email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");
    // other form elements
    this.errorMessage = document.querySelector("#signup-error-container");
    this.submitButton = document.querySelector("#signup-btn");
  }

  handleEmailInput = (event) => {
    const email = event.target.value;
  };

  handleRepeatEmailInput = () => {};

  handlePasswordInput = (event) => {
    const password = event.target.value;
  };

  handleRepeatPasswordInput = () => {};

  saveData = (event) => {
    event.preventDefault();
    const username = this.usernameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // create new user

    const newUser = new User(username, email, password);

    // save the user in the database

    // empty form
    this.usernameInput.value = "";
    this.emailInput.value = "";
    this.repeatEmailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.value = "";
  };

  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.repeatEmailInput.addEventListener(
      "input",
      this.handleRepeatEmailInput
    );
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );
    this.submitButton.addEventListener("click", this.saveData);
  };
}

const signup = new Signup();
window.addEventListener("load", signup.addListeners);

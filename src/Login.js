class Login {
  constructor() {
    this.emailInput = document.querySelector("#email-input");
    this.passwordInput = document.querySelector("#password-input");
    this.loginButton = document.querySelector("#login-btn");
    this.loginError = document.querySelector(".login-error");
  }

  handleLogin = (event) => {
    event.preventDefault();
    const users = db.getAllUsers();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    const user = users.find((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }
    });

    if (!user) {
      this.loginError.innerHTML = "password or email is wrong";
    } else if (user) {
      db.setCurrentUser(user);
      location.assign("dashboard.html");
    }
  };

  addListeners = () => {
    this.loginButton.addEventListener("click", this.handleLogin);
  };
}

const login = new Login();

window.addEventListener("load", login.addListeners);

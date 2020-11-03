class Validator {
  constructor() {
    this.invalidEmailError = "Enter a valid emailaddress";
    this.invalidEmailMatch = "The email fields must match";
    this.emailIsTakenError = "This email already exists";
    this.passwordMatchError = "The password fields must match";
    this.passwordLengthError = "The password must be atleast 6 characters";

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      invalidEmailMatch: this.invalidEmailMatch,
      emailIsTakenError: this.emailIsTakenError,
      passwordMatchError: this.passwordMatchError,
      passwordLengthError: this.passwordLengthError,
    };
  }

  checkEmailSyntax = (email) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const valid = emailRegEx.test(email);

    if (valid) {
      delete this.errors.invalidEmailError;
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };

  checkEmailAvalibility = (newEmail) => {
    const users = db.getAllUsers();

    const uniqueEmail = true;

    users.forEach((user) => {
      if (user.email === newEmail) {
        uniqueEmail = false;
      }
    });
    if (uniqueEmail) {
      delete this.errors.emailIsTakenError;
    } else {
      this.errors.emailIsTakenError = this.emailIsTakenError;
    }
    console.log(localStorage);
  };

  checkEmailMatch = (email, repeatEmail) => {
    if (email === repeatEmail) {
      delete this.errors.invalidEmailMatch;
    } else {
      this.errors.invalidEmailMatch = this.invalidEmailMatch;
    }
  };

  checkPasswordLength = (password) => {
    if (password.length >= 6) {
      delete this.errors.passwordLengthError;
    } else {
      this.errors.passwordLengthError = this.passwordLengthError;
    }
  };

  checkPasswordMatch = (password, repeatPassword) => {
    if (password === repeatPassword) {
      delete this.errors.passwordMatchError;
    } else {
      this.errors.passwordMatchError = this.passwordMatchError;
    }
  };

  displayErrors = () => {
    return this.errors;
  };
}

const validator = new Validator();

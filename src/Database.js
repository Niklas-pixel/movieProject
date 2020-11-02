class Database {
  // method to get users array from LS
  getAllUsers = () => {
    const usersString = localStorage.getItem("users");
    const usersArray = JSON.parse(usersString);

    if (usersArray === null) {
      return [];
    } else {
      return usersArray;
    }
  };
  // method to save a user into LS

  saveNewUser = (newUser) => {
    const usersArray = this.getAllUsers();

    const updatedUsersArray = [...usersArray, newUser];
    const updatedUsersString = JSON.stringify(updatedUsersArray);
    localStorage.setItem("users", updatedUsersString);
  };
}

const db = new Database();

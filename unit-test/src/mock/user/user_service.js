class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogIn = false;
  }

  login(id, password) {
    if (!this.isLogIn) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogIn = true));
    }
  }
}

module.exports = UserService;

class UserClient {
  login(id, password) {
    return fetch("http://example.com/login/id+password").then((res) =>
      res.json()
    );
  }
}

module.exports = UserClient;

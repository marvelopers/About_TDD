const UserService = require("../user_service");
const UserClient = require("../user_client");

describe("UserService", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("call login in UserClient when tries to login", async () => {
    await userService.login("id", "1234");
    expect(login.mock.calls.length).toBe(1);
  });

  it("should not call login in UserClient again if already login", async () => {
    await userService.login("id", "1234");
    await userService.login("id", "1234");
    expect(login.mock.calls.length).toBe(1);
  });
});

const { connectTestDB, dropDB } = require("../services/setuptestdb");
const User = require("./users.mongo");

beforeAll(async () => connectTestDB());
afterAll(async () => dropDB());

describe("todos.model", () => {
  test("it should create a todo item successfully", async () => {
    let newtestuser = {
      username: "someuser",
      email: "email@gmail.com",
      password: "somehashpassword",
      userID: 1001,
      token: "sometoken",
    };

    const newUser = await User(newtestuser);
    await newUser.save();

    expect(newUser._id).toBeDefined();
    expect(newUser.username).toBe("someuser");
    expect(newUser.email).toBe("email@gmail.com");
    expect(newUser.password).toBe("somehashpassword");
    expect(newUser.userID).toBe(1001);
    expect(newUser.token).toBe("sometoken");
  });
});

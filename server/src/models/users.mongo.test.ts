import { connectTestDB, dropDB, dropCollections } from "../services/testdb";
import User from "./users.mongo";

beforeAll(async () => await connectTestDB());
afterAll(async () => await dropDB());
afterEach(async () => await dropCollections());

describe("users.model", () => {
  test("it should create a new user successfully", async () => {
    let newtestuser = {
      username: "someuser",
      email: "email@gmail.com",
      password: "somehashpassword",
      userID: 1001,
      token: "sometoken",
    };

    const newUser = new User(newtestuser);
    await newUser.save();

    expect(newUser._id).toBeDefined();
    expect(newUser.username).toBe("someuser");
    expect(newUser.email).toBe("email@gmail.com");
    expect(newUser.password).toBe("somehashpassword");
    expect(newUser.userID).toBe(1001);
    expect(newUser.token).toBe("sometoken");
  });
});

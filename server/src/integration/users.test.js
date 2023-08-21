const {
  connectTestDB,
  dropDB,
  dropCollections,
} = require("../services/testdb");
const supertest = require("supertest");

const app = require("../app");

beforeAll(async () => connectTestDB());
afterEach(async () => dropCollections());
afterAll(async () => dropDB());

describe("post '../api/users' ", () => {
  test("it should create a new user", async () => {
    const newUser = {
      username: "someuser",
      email: "email@gmail.com",
      password: "123456",
    };

    const response = await supertest(app)
      .post("/api/users")
      .send(newUser)
      .expect(201)
      .expect("Content-Type", /json/);

    expect(response.body.username).toBe("someuser");
    expect(response.body.email).toBe("email@gmail.com");
    expect(response.body.token).toBeDefined();
  });

  test("it should not create a new user if the payload is not complete", async () => {
    const badUser = {
      email: "email@gmail.com",
      password: "123456",
    };

    const response = await supertest(app)
      .post("/api/users")
      .send(badUser)
      .expect(400)
      .expect("Content-Type", /json/);

    expect(response.error.text).toEqual('{"error":"Missing required field"}');
  });
});

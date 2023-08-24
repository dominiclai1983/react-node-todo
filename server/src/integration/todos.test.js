const {
  connectTestDB,
  dropDB,
  dropCollections,
} = require("../services/testdb");
const supertest = require("supertest");
const Todo = require("../models/todos.mongo");

const app = require("../app");

var token;
const mock = {
  newUser: {
    username: "someuser",
    email: "email@gmail.com",
    password: "123456",
  },
  login: {
    username: "someuser",
    password: "123456",
  },
  todoitem: {
    item: "do some js!",
    user_id: 1000,
  },
};

beforeAll(async () => {
  connectTestDB();
  await supertest(app).post("/api/users").send(mock.newUser);
  const testTodo = await Todo(mock.todoitem);
  await testTodo.save();
});
beforeEach(async () => {
  token = (await supertest(app).post("/api/login").send(mock.login)).body.data;
});
//afterEach(async () => dropCollections());
afterAll(async () => {
  dropCollections();
  dropDB();
});

describe("get '../api/tasks' ", () => {
  test("it should return all todo of a user", async () => {
    const response = await supertest(app)
      .get("/api/tasks")
      .set("x-access-token", token)
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.body[0].item).toEqual("do some js!");
    expect(response.body[0].user_id).toBe(1000);
  });
});

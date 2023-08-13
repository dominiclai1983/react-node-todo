const { connectTestDB, dropDB } = require("../services/setuptestdb");
const Todo = require("./todos.mongo");

beforeAll(async () => connectTestDB());
afterAll(async () => dropDB());

describe("todos.model", () => {
  test("it should create a todo item successfully", async () => {
    let todoitem = {
      item: "do some js!",
      user_id: 1001,
    };

    const newTodo = await Todo(todoitem);
    await newTodo.save();

    expect(newTodo._id).toBeDefined();
    expect(newTodo.item).toBe("do some js!");
    expect(newTodo.completed).toBe(false);
    expect(newTodo.deleted).toBe(false);
    expect(newTodo.user_id).toBe(1001);
  });
});

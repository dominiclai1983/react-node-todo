const {
  connectTestDB,
  dropDB,
  dropCollections,
} = require("../services/testdb");

const {
  getAllTodos,
  getUserActiveTodos,
  getUserCompletedTodos,
  putUserTodos,
  getCompletedTodos,
  postNewTodo,
  putUserTodo,
} = require("./todos.model");

beforeAll(async () => connectTestDB());
afterAll(async () => dropDB());
afterEach(async () => dropCollections());

describe("todos.model methods", () => {
  test("should return a new todo", async () => {
    const user_id = 1001,
      item = "kiss your mon!";

    const result = await postNewTodo(user_id, item);

    expect(result[0].id).toBeDefined();
    expect(result[0].item).toBe("kiss your mon!");
    expect(result[0].completed).toBe(false);
    expect(result[0].deleted).toBe(false);
    expect(result[0].user_id).toBe(1001);
  });
});

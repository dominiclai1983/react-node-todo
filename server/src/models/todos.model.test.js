const {
  connectTestDB,
  dropDB,
  dropCollections,
} = require("../services/testdb");

const Todo = require("./todos.mongo");

const {
  getAllTodos,
  getUserActiveTodos,
  getUserCompletedTodos,
  putUserTodos,
  getCompletedTodos,
  postNewTodo,
  putUserTodo,
} = require("./todos.model");

const mock = [
  {
    item: "test some js!",
    completed: false,
    deleted: false,
    user_id: 1001,
  },
  {
    item: "test some js!",
    completed: true,
    deleted: false,
    user_id: 1001,
  },
  {
    item: "test some js!",
    completed: false,
    deleted: true,
    user_id: 1001,
  },
];

beforeAll(async () => connectTestDB());
beforeEach(async () => await Todo.insertMany(mock));
afterEach(async () => dropCollections());
afterAll(async () => dropDB());

describe("todos.model methods", () => {
  test("should return a new todo, postNewTodo()", async () => {
    const user_id = 1001,
      item = "kiss your mon!";

    const result = await postNewTodo(user_id, item);

    expect(result[0]._id).toBeDefined();
    expect(result[0].item).toBe("kiss your mon!");
    expect(result[0].completed).toBe(false);
    expect(result[0].deleted).toBe(false);
    expect(result[0].user_id).toBe(1001);
  });

  test("should return all non-deleted todo, getAllTodos()", async () => {
    const result = await getAllTodos(1001);

    expect(result.length).toBe(2);
    expect(result[0].user_id).toBe(1001);
    expect(result[0].deleted).toBe(false);
    expect(result[1].deleted).toBe(false);
  });

  test("should return all active todo, getUserActiveTodos()", async () => {
    const result = await getUserActiveTodos(1001);

    expect(result.length).toBe(1);
    expect(result[0].user_id).toBe(1001);
    expect(result[0].completed).toBe(false);
    expect(result[0].deleted).toBe(false);
  });

  test("should return all completed todo, getUserCompletedTodos()", async () => {
    const result = await getUserCompletedTodos(1001);

    expect(result.length).toBe(1);
    expect(result[0].user_id).toBe(1001);
    expect(result[0].completed).toBe(true);
    expect(result[0].deleted).toBe(false);
  });

  test("should toddle the task complete status, putUserTodos()", async () => {
    const todos = await Todo.find();
    const todosIdToFind = todos[0].id;
    const completed = todos[0].completed;
    console.log(todosIdToFind);

    const completedTodo = await putUserTodos(todosIdToFind, completed);

    expect(completedTodo.id).toBe(todosIdToFind);
    expect(completedTodo.user_id).toBe(1001);
    expect(completedTodo.completed).toBe(true);
    expect(completedTodo.deleted).toBe(false);
  });
});

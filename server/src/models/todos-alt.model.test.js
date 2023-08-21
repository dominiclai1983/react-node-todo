const mockingoose = require("mockingoose");
const todoModel = require("./todos.mongo");

/* this test is using mockingoose instant of mongodb-memory-server
keeping the file as learning purpose
*/

const {
  getAllTodos,
  getUserActiveTodos,
  getUserCompletedTodos,
  putUserTodos,
  getCompletedTodos,
  postNewTodo,
  putUserTodo,
} = require("./todos.model");

describe("todo service", () => {
  beforeEach(() => {
    mockingoose.resetAll();
  });

  test("it should return a new todo, postNewTodo()", async () => {
    mockingoose(todoModel).toReturn(
      {
        item: "kiss your mon!",
        completed: false,
        deleted: false,
        user_id: 1001,
      },
      "save"
    );
    const user_id = 1001,
      item = "Kiss my ass now!";

    const result = await postNewTodo(user_id, item);

    expect(result[0]._id).toBeDefined();
    expect(result[0].item).toBe("kiss your mon!");
    expect(result[0].completed).toBe(false);
    expect(result[0].deleted).toBe(false);
    expect(result[0].user_id).toBe(1001);
  });

  test("it should return the list of todo, getAllTodos", async () => {
    mockingoose(todoModel).toReturn(
      [
        {
          item: "Kiss my ass",
          completed: false,
          deleted: false,
          user_id: 1001,
        },
        {
          item: "Kiss my ass again",
          completed: false,
          deleted: false,
          user_id: 1001,
        },
      ],
      "find"
    );
    const results = await getAllTodos();
    expect(results[0].item).toBe("Kiss my ass");
    expect(results[1].item).toBe("Kiss my ass again");
  });
});

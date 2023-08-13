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

  describe("postNewTodo", () => {
    it.only("should return a new todo", async () => {
      mockingoose(todoModel).toReturn(
        {
          item: "Kiss my ass now!",
          completed: false,
          deleted: false,
          user_id: 1001,
        },
        "save"
      );
      const user_id = 1001,
        item = "Kiss my ass now!";

      const result = await postNewTodo(user_id, item);

      expect(result[0].id).toBeDefined();
      expect(result[0].item).toBe("Kiss my ass now!");
    });
  });

  describe("getAllTodos", () => {
    it("should return the list of todo", async () => {
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
});

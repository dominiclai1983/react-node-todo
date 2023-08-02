const mockingoose = require("mockingoose");
const todoModel = require("./todos.mongo");

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
  describe("getAllTodos", () => {
    it("should return ths list of todo", async () => {
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
    });
  });
});

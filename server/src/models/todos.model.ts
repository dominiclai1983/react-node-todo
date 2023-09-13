//const Todo = require("./todos.mongo");
import Todo from "./todos.mongo";
//this one is the database

export async function postNewTodo(userID: number, item: string) {
  return await Todo.create([{ user_id: userID, item: item }], { __v: 0 });
}

export async function putUserTodo(taskID: number, item: string) {
  return await Todo.findOneAndUpdate(
    { taskID },
    { item },
    {
      new: true,
    }
  );
}

export async function getAllTodos(userID: number) {
  return await Todo.find(
    {
      user_id: userID,
      deleted: false,
    },
    { __v: 0 }
  ).sort({ _id: -1 });
}

export async function getUserActiveTodos(userID: number) {
  return await Todo.find(
    {
      user_id: userID,
      completed: false,
      deleted: false,
    },
    { __v: 0 }
  ).sort({ _id: -1 });
}

export async function getUserCompletedTodos(userID: number) {
  return await Todo.find(
    {
      user_id: userID,
      completed: true,
      deleted: false,
    },
    { __v: 0 }
  ).sort({ _id: -1 });
}

export async function putUserTodos(taskID: number, completed: boolean) {
  return await Todo.findByIdAndUpdate(
    taskID,
    { completed: completed },
    { new: true }
  );
}

export async function getCompletedTodos(taskID: number) {
  return await Todo.findByIdAndUpdate(taskID, { deleted: true });
}

module.exports = {
  getAllTodos,
  getUserActiveTodos,
  getUserCompletedTodos,
  putUserTodos,
  getCompletedTodos,
  postNewTodo,
  putUserTodo,
};

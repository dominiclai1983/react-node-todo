const path = require("path");
const Todo = require(path.join(
  __dirname,
  "..",
  "..",
  "src",
  "models",
  "todos.mongo"
));

const seedProducts = [
  {
    item: "JS is super star!",
    user_id: 1000,
  },
];

const todoSeedForLocal = async () => {
  await Todo.deleteMany({});
  await Todo.insertMany(seedProducts);
};

module.exports = todoSeedForLocal;

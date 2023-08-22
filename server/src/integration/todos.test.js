const {
  connectTestDB,
  dropDB,
  dropCollections,
} = require("../services/testdb");
const supertest = require("supertest");
const userSeedForLocal = require("../utils/seed/userSeedForLocal");
const todoSeedForLocal = require("../utils/seed/userSeedForLocal");

const app = require("../app");

beforeAll(async () => connectTestDB());
beforeEach(async () => {
  userSeedForLocal();
  todoSeedForLocal();
});
afterEach(async () => dropCollections());
afterAll(async () => dropDB());

describe("get '../api/tasks' ", () => {
  test("it should return all todo of a user", async () => {});
});

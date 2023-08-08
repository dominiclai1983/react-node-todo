const jwt = require("jsonwebtoken");
const verifyToken = require("./auth");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

jest.mock("jsonwebtoken");

describe("verifyToken()", () => {
  test("should call next middleware when token is valid", () => {
    const req = {
      headers: {
        "x-access-token": "valid-token",
      },
      body: {
        token: "valid-token",
      },
      query: {
        token: "valid-token",
      },
    };
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const res = {};
    const next = jest.fn();

    const verify = jest
      .spyOn(jwt, "verify")
      .mockReturnValueOnce({ username: "test_user", userID: 123 });

    verifyToken(req, res, next);

    expect(verify).toHaveBeenCalledWith(token, process.env.TOKEN_KEY);
    expect(req.headers).toEqual({ "x-access-token": "valid-token" });
    expect(req.username).toEqual("test_user");
    expect(req.userID).toBe(123);
    expect(next).toHaveBeenCalledWith();
  });

  test("the token is invalid", () => {
    const req = {
      header: {
        "x-access-token": "invalid-token",
      },
      body: {
        token: "invalid-token",
      },
      query: {
        token: "invalid-token",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    jwt.verify.mockImplementationOnce(() => {
      throw new Error({ error: "Invalid Token" });
    });
    /*jest.spyOn(jwt, 'verify).mockImplementationOnce(() => {
      throw new Error("Invalid token");
    });*/

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: "Invalid Token" });
    expect(next).not.toHaveBeenCalledWith();
  });

  test("the token is missing", () => {
    const req = {
      headers: {},
      query: {},
      body: {},
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      error: "A token is required for authentication",
    });
  });
});

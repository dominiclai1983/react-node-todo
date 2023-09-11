module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest", // Add this line to allow Jest to process .js files
    "^.+\\.ts$": "ts-jest", // Already included for .ts files
  },
  moduleFileExtensions: ["js", "ts", "json", "node"],
};

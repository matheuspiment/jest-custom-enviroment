const sub = require("../src/sub");

test("subtracts 1 - 2 to equal -1", () => {
  expect(sub(1, 2)).toBe(-1);
});

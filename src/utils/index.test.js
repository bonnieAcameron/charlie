const utils = require("./index");

describe("utils / index", () => {
  it("exports things", () => {
    expect(Object.keys(utils)).toEqual(["cache", "dates", "slack", "tock"]);
  });
});

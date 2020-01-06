import { utils } from "./utils";

describe("generateId()", () => {
  it("should generate string with number", () => {
    expect(/^[0-9]/.test(utils.generateId())).toBeTruthy();
  });
  it("should generate different ids", () => {
    const id1 = utils.generateId();
    const id2 = utils.generateId();
    expect(id1 !== id2).toBeTruthy();
  });
});

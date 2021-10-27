import { getResultText } from "../pageObjects/app";
import { load, close } from "../pageObjects/index";

describe("React App", () => {
  beforeEach(async () => {
    await load();
  });

  afterEach(async () => {
    await close();
  });

  it("should show the correct result", async () => {
    expect(await getResultText()).toBe("hello tester");
  });
});

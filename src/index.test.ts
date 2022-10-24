import { strict as assert } from "node:assert";
import test, { describe } from "node:test";
import { main } from ".";

describe("first test", () => {
  test("name camelCases", () => {
    assert.equal(main("examples/simple-spec.yaml", ""), "");
  });
});

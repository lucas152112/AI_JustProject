import test from "node:test";
import assert from "node:assert/strict";
import { designTokens } from "./index.js";

test("design tokens expose primary color", () => {
  assert.equal(designTokens.colors.primary, "#155eef");
});


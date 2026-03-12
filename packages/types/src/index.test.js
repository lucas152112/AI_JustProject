import test from "node:test";
import assert from "node:assert/strict";
import { systemRoles } from "./index.js";

test("system roles include PM", () => {
  assert.ok(systemRoles.includes("PM"));
});


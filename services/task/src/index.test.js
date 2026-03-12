import test from "node:test";
import assert from "node:assert/strict";
import { taskService } from "./index.js";

test("task service skeleton defines blocked state", () => {
  assert.ok(taskService.statuses.includes("Blocked"));
});


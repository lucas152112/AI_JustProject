import test from "node:test";
import assert from "node:assert/strict";
import { projectService } from "./index.js";

test("project service skeleton exposes resources", () => {
  assert.ok(projectService.resources.includes("projects"));
});


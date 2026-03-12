import test from "node:test";
import assert from "node:assert/strict";
import { deploymentService } from "./index.js";

test("deployment service skeleton includes prod env", () => {
  assert.ok(deploymentService.environments.includes("prod"));
});


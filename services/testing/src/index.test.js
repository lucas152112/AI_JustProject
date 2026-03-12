import test from "node:test";
import assert from "node:assert/strict";
import { testingService } from "./index.js";

test("testing service skeleton includes e2e reports", () => {
  assert.ok(testingService.reportTypes.includes("e2e"));
});


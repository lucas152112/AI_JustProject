import test from "node:test";
import assert from "node:assert/strict";
import { identityService } from "./index.js";

test("identity service skeleton exposes service name", () => {
  assert.equal(identityService.name, "identity");
});


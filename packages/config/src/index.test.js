import test from "node:test";
import assert from "node:assert/strict";
import { appConfig } from "./index.js";

test("config has positive api port", () => {
  assert.ok(appConfig.apiPort > 0);
});


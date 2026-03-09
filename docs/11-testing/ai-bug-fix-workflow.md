# AI Bug Fix Workflow

當 Unit Test 或 E2E 失敗時：

1. 蒐集報告
2. 交給 Aider
3. Aider 透過 OpenRouter 呼叫模型
4. 模型生成 patch
5. 重新驗證

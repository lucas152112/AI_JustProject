# AI Bug Fix System

AI 修錯流程：

1. 蒐集 Unit Test / E2E 報告
2. 將錯誤、stack trace、測試檔案交給 Aider
3. Aider 透過 OpenRouter 呼叫模型
4. 模型生成修正 patch
5. 重新跑測試驗證

模型：
- DeepSeek Coder V3.2
- Qwen3 Coder 32B

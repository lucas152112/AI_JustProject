# Model Router Design

## 目標
對不同任務選擇合適模型，避免單一模型承擔全部工作。

## 任務類型
- Coding
- Bug fixing
- Test generation
- Documentation
- Analysis / Planning

## 初版策略
- Coding 主流程：GitHub Copilot CLI / Codex CLI
- Bug fix：Aider + OpenRouter
- Bug fix model：DeepSeek Coder V3.2 / Qwen3 Coder 32B

## 未來可擴充
- 任務型模型路由
- 成本 / 效率 / 失敗率動態切換
- 依 repo / 語言 / 模組套用不同預設模型

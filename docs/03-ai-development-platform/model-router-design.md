# Model Router Design

Bug Fix Agent 可根據任務類型選擇模型：

- Primary：DeepSeek Coder V3.2
- Fallback：Qwen3 Coder 32B

主要考量：
- 程式理解能力
- bug 修復穩定性
- 成本控制

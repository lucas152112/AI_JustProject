# AI Bug Fix System

## 主要工具
- Aider
- OpenRouter
- DeepSeek Coder V3.2
- Qwen3 Coder 32B

## 定位
AI Bug Fix System 用於讀取測試報告與錯誤紀錄，分析可能原因並產生修復 patch。

## 觸發來源
- Unit test fail
- E2E fail
- 編譯失敗

## 修復流程
```text
Test Report / Error Log
        │
        ▼
Aider
        │
        ▼
OpenRouter
        │
        ├─ DeepSeek Coder V3.2
        └─ Qwen3 Coder 32B
        │
        ▼
Generate Fix Patch
        │
        ▼
Re-run Tests
```

## 模型策略
- Primary：DeepSeek Coder V3.2
- Fallback：Qwen3 Coder 32B

## 原則
- AI 修復必須有測試依據
- 不允許直接跳過測試關卡
- 修復結果需保留 commit / patch 記錄

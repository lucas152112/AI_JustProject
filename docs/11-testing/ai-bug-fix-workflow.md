# AI Bug Fix Workflow

## 輸入
- Unit test report
- E2E report
- Error logs
- Stack trace

## 處理
- Aider 讀取 repo 與測試報告
- 透過 OpenRouter 呼叫模型
- 產生 patch 或修正建議
- 重新執行測試

## 原則
- E2E failure 為高優先處理事件
- 修正後必須重新通過對應測試

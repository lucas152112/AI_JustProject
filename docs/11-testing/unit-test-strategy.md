# Unit Test Strategy

## 目的
- 快速驗證模組或函式邏輯
- 作為開發提交後的第一層品質防線

## 流程
- 開發完成功能
- 撰寫 / 更新單元測試
- push 後由 GitHub Actions 觸發 Tekton
- Tekton 執行 compile + unit test

# CI/CD Architecture

## 現況
- 主力 CI/CD：Tekton
- 開發觸發層：GitHub Actions（規劃導入）
- 專用 CI/CD Node：包含 package cache

## 分層責任
- GitHub Actions：監聽 repo 事件、觸發 Tekton
- Tekton：編譯、單元測試、後續延伸整合測試與部署

## 原則
- GitHub Actions 不取代 Tekton
- 重型工作統一在 Tekton 執行
- Package cache 為 CI/CD Node 核心能力之一

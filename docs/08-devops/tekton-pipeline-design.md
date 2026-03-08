# Tekton Pipeline Design

## 初版 Pipeline
- Source checkout / sync
- Restore package cache
- Compile
- Unit test

## 後續 Pipeline
- E2E test
- Image build
- Deploy to dev / test / pp / prod
- Rollback

## 執行原則
- Pipeline 可參數化 branch、commit、environment
- 測試報告需可被後續 AI Bug Fix 流程讀取

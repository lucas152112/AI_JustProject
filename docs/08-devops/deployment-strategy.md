# Deployment Strategy

## 環境
- dev
- test
- pp
- prod

## 推進流程
- 開發驗證：compile + unit test
- 測試環境：E2E
- 預正式：發版前最終整合驗證
- 正式：審批後部署

## 回滾
- 保留前一版本 image 與部署設定
- 建立 rollback SOP

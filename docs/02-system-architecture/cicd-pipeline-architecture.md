# CI/CD Pipeline Architecture

版本：v0.5.1

## 目標
建立從 commit 到部署的自動化交付鏈路。

## 階段
1. GitHub Actions 觸發
2. Tekton 執行 build / test / image / deploy
3. 報告與通知回寫平台
4. 失敗時轉入 bug fix 或 rollback

## 輸出
1. 測試報告
2. Image 與版本標記
3. 部署結果與審計紀錄

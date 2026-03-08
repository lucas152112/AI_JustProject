# GitHub Actions Trigger Design

## 主要定位
GitHub Actions 作為程式開發階段的觸發層。

## 流程
1. 開發者完成功能並撰寫單元測試
2. commit / push 至 GitHub
3. GitHub Actions 依 branch 規則觸發
4. 呼叫 Tekton Pipeline
5. Tekton 執行編譯與單元測試
6. 測試結果回寫 GitHub / 通知系統

## 建議事件
- push to feature/*
- push to develop
- pull_request（future）

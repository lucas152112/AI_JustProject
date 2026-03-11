# MVP Scope

版本：v0.6.0

## 目標
將 `v0.5.1` 的完整規劃收斂為第一階段可落地的 MVP，優先打通「專案 -> 任務 -> 測試 -> 部署觀測」主鏈路。

## MVP 原則
1. 優先交付可用流程，不先追求全模組完整度
2. 優先實作高頻頁面與核心 API
3. 優先建立可擴充的 repo、schema、auth、CI 骨架
4. AI、通知、報表先做最小可用版，再逐步擴充

## 必做範圍
1. 身份驗證與基本 RBAC
2. 專案管理
3. 任務管理
4. 基礎 Dashboard
5. 測試報告列表與詳情
6. 部署觀測與版本列表
7. 通知中心最小版
8. AI Workbench 最小版

## 延後範圍
1. 多地部署與完整 DR 演練
2. 完整 Bot 指令與外部 IM 深整合
3. 完整報表中心與排程匯出
4. 自動 hotfix 與高階 AI 評估系統
5. Flutter App 與 H5 端

## MVP 角色
1. Super Admin
2. PM
3. Developer
4. Tester
5. DevOps

## MVP 成功標準
1. 使用者可登入並依角色看到對應頁面
2. PM 可建立專案與任務
3. Developer 可更新任務、關聯 PR / commit
4. Tester 可查看測試結果並建立缺陷
5. DevOps 可查看版本與部署狀態
6. 主要流程具備基本通知與審計紀錄

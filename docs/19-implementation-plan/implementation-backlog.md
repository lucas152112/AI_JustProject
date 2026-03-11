# Implementation Backlog

版本：v0.6.0

## Phase 0：工程骨架
1. 建立 monorepo 目錄：`apps/`、`services/`、`packages/`、`infra/`
2. 建立前端 admin/workspace app shell
3. 建立 BFF 與 gateway skeleton
4. 建立 user/project/task service skeleton
5. 建立 migration、seed、env 範本
6. 建立 lint、format、test、CI 基本腳本

## Phase 1：身份與權限
1. 實作 login / logout / session refresh
2. 實作 user、role、permission schema
3. 實作 route guard 與 API permission middleware
4. 建立預設角色與 seed data
5. 建立審計 log middleware

## Phase 2：專案與任務
1. 專案 CRUD API
2. 專案成員管理 API
3. 任務 CRUD API
4. 任務狀態流轉 API
5. 專案列表頁與詳情頁
6. 任務列表頁、看板頁、詳情頁
7. 活動流與評論最小版

## Phase 3：測試與部署觀測
1. 測試報告 schema 與查詢 API
2. E2E / Unit 報告列表與詳情頁
3. 版本與 release schema
4. 部署狀態查詢 API
5. deployment release list / environment overview 頁面

## Phase 4：AI 與通知最小版
1. AI interaction log schema
2. AI workbench 單頁最小版
3. 站內通知 schema 與 API
4. notification center 頁面
5. 任務、測試、部署事件回寫通知

## Phase 5：收斂與發版
1. 補 unit / integration / E2E 測試
2. 補 seed、demo data、權限驗證案例
3. 建 dev/test 環境部署腳本
4. 建 MVP 發版檢查清單

## 每個 backlog item 的完成定義
1. API / 頁面 / schema 已實作
2. 基本測試可通過
3. 文件與 env 範本已更新
4. 有最小審計與錯誤處理

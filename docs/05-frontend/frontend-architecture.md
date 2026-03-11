# Frontend Architecture

版本：v0.5.1

## 分層
1. App Shell
2. Route Guard / Auth
3. Feature Modules
4. Shared UI / API Client / State

## 原則
1. 前後台共享設計語言
2. 權限在路由與元件雙層驗證
3. 以 BFF 聚合資料降低耦合

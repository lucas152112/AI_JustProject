# Page Structure Overview

版本：v0.5

## 設計範圍
依據 `docs/16-functional-specifications` 的 11 個功能模組，頁面結構分為：
1. 共用頁面（登入、錯誤頁、個人資料）
2. 後台管理頁（Admin）
3. 前台協作頁（Frontend/User Workspace）

## 全站路由結構

### 共用頁面
| 頁面 | 路由 | 說明 |
|---|---|---|
| Login | `/login` | 帳號登入與 MFA |
| Forgot Password | `/forgot-password` | 重設密碼申請 |
| Profile | `/profile` | 個人資料與安全設定 |
| Notification Center | `/notifications` | 系統通知與未讀訊息 |
| 403 | `/403` | 無權限頁 |
| 404 | `/404` | 找不到頁面 |

### 後台管理頁（Admin）
| 模組 | 路由群組 | 子頁面 |
|---|---|---|
| Dashboard | `/admin/dashboard` | 全域概況、告警、待辦 |
| User Management | `/admin/users` | 使用者列表、建立/編輯、登入紀錄 |
| Role & Permission | `/admin/roles` | 角色列表、權限矩陣 |
| Project Management | `/admin/projects` | 專案列表、詳情、成員、里程碑、版本 |
| Task Management | `/admin/tasks` | 列表、看板、任務詳情 |
| AI Development | `/admin/ai-dev` | coding log、bug fix history、模型統計 |
| Testing | `/admin/testing` | Unit、E2E、失敗分析、趨勢 |
| Deployment | `/admin/deployments` | 環境狀態、發版、灰度、回滾 |
| Microservices | `/admin/microservices` | 服務清單、健康度、服務註冊 |
| Communication | `/admin/communication` | 通知通道、Bot 指令、進度回報 |
| DR Management | `/admin/dr` | 備份、回存、演練、多地狀態 |
| Reporting | `/admin/reports` | 專案進度、測試統計、部署歷史 |
| System Settings | `/admin/settings` | API keys、模型設定、通知設定、系統參數 |

### 前台協作頁（Frontend/User Workspace）
| 頁面 | 路由 | 說明 |
|---|---|---|
| 首頁 | `/` | 個人待辦、近期專案與任務 |
| 專案列表 | `/projects` | 參與專案清單與篩選 |
| 專案詳情 | `/projects/:projectId` | 專案概況、里程碑、最近活動 |
| 任務列表 | `/tasks` | 我的任務、可追蹤任務 |
| 任務看板 | `/tasks/board` | Kanban 檢視 |
| 任務詳情 | `/tasks/:taskId` | 任務內容、評論、關聯 commit |
| AI 互動頁 | `/ai-workbench` | 提示詞互動、修復建議、輸出紀錄 |
| 測試結果 | `/testing` | 與任務相關的測試結果 |
| 部署觀察 | `/deployments` | 版本狀態與部署結果（只讀為主） |
| 進度報告 | `/reports/my` | 個人/專案進度報告 |

## 導覽層級
1. L1：主模組（Dashboard、Project、Task、AI、Testing...）
2. L2：模組子頁（例如 Testing -> Unit Test）
3. L3：詳細頁（例如 Task Detail、Project Version Detail）

## 狀態頁與空資料頁
每個列表頁需統一提供：
1. `Loading` 狀態（骨架屏）
2. `Empty` 狀態（引導建立）
3. `Error` 狀態（重試按鈕與錯誤碼）

## 交付標準
每個頁面設計至少要包含：
1. 頁面目的與目標角色
2. 區塊配置（Header / Filter / List / Detail / Action）
3. 關鍵操作（Create / Edit / Delete / Execute）
4. 成功與失敗回饋（Toast / Inline error / Dialog）

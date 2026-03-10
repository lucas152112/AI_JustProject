# Admin Pages

版本：v0.5

## 後台頁面清單（完整）
| 模組 | 頁面 | 路由 | 主要區塊 | 核心操作 | 對應功能規格 |
|---|---|---|---|---|---|
| Dashboard | 系統儀表板 | `/admin/dashboard` | KPI 卡片、告警流、待辦、版本狀態 | 篩選時間、跳轉任務、標記已讀告警 | reporting/deployment/testing |
| User | 使用者列表 | `/admin/users` | 搜尋列、篩選器、列表表格、批次操作列 | 建立、停用、重設密碼、角色綁定 | user-management |
| User | 使用者詳情 | `/admin/users/:id` | 基本資料、角色、登入紀錄、操作歷程 | 編輯資料、啟用/停用、解除裝置 | user-management |
| User | 登入紀錄 | `/admin/users/:id/login-logs` | 時間軸、IP/Device 表格 | 查詢、匯出 CSV | user-management |
| Role | 角色列表 | `/admin/roles` | 角色卡片、權限摘要 | 建立角色、複製角色、停用角色 | role-permission-management |
| Role | 權限矩陣 | `/admin/roles/permission-matrix` | 模組 x 操作矩陣表格 | 編輯頁面權限、編輯操作權限 | role-permission-management |
| Project | 專案列表 | `/admin/projects` | 搜尋、狀態篩選、專案表格 | 建立專案、封存專案、匯出清單 | project-management |
| Project | 專案詳情 | `/admin/projects/:projectId` | 概覽、統計、活動流 | 編輯專案、更新狀態 | project-management |
| Project | 成員管理 | `/admin/projects/:projectId/members` | 成員表格、邀請區 | 邀請成員、調整角色、移除成員 | project-management |
| Project | 里程碑 | `/admin/projects/:projectId/milestones` | 甘特圖、里程碑列表 | 建立/調整里程碑、標記完成 | project-management |
| Project | 版本紀錄 | `/admin/projects/:projectId/versions` | 版本清單、變更摘要 | 建立版本、標記發布、回溯版本 | project-management |
| Task | 任務列表 | `/admin/tasks` | 多欄篩選、任務表格 | 建立、批次指派、批次改狀態 | task-management |
| Task | 任務看板 | `/admin/tasks/board` | Kanban 欄位、WIP 限制 | 拖拉轉狀態、快速編輯 | task-management |
| Task | 任務詳情 | `/admin/tasks/:taskId` | 描述、子任務、評論、關聯 Commit | 指派、改優先級、連結 PR/Commit | task-management |
| AI Dev | Coding Logs | `/admin/ai-dev/logs` | 日誌表格、prompt/response 面板 | 過濾、重跑、標記有效策略 | ai-development-management |
| AI Dev | Bug Fix History | `/admin/ai-dev/bugfix-history` | 缺陷時間軸、回歸狀態 | 建立修復任務、關聯測試結果 | ai-development-management |
| AI Dev | Model Usage Stats | `/admin/ai-dev/model-stats` | 成本圖表、Token 圖表、成功率 | 時段分析、模型切換建議 | ai-development-management |
| Testing | Unit Test Report | `/admin/testing/unit` | 報告列表、覆蓋率圖 | 下載報告、追蹤失敗案例 | testing-management |
| Testing | E2E Test Report | `/admin/testing/e2e` | 場景列表、失敗截圖區 | 重跑測試、建立 bug 任務 | testing-management |
| Testing | Failure Analysis | `/admin/testing/failures` | root cause 分群、趨勢表 | 指派負責人、標註原因 | testing-management |
| Testing | Trend Dashboard | `/admin/testing/trends` | 通過率/耗時趨勢圖 | 比較版本、匯出圖表 | testing-management |
| Deployment | 環境狀態 | `/admin/deployments/environments` | env 狀態卡、健康檢查 | 切換環境、刷新狀態 | deployment-management |
| Deployment | 版本列表 | `/admin/deployments/releases` | 版本表格、變更內容 | 發版、灰度、終止灰度 | deployment-management |
| Deployment | Rollback | `/admin/deployments/rollback` | 可回滾版本、風險提示 | 一鍵回滾、審批確認 | deployment-management |
| Microservices | 服務清單 | `/admin/microservices/services` | 服務表格、依賴圖 | 上下線、配置變更、健康檢查 | module-overview(微服務管理) |
| Microservices | 服務詳情 | `/admin/microservices/services/:serviceId` | 指標、日誌、版本 | 重啟、擴縮容、檢視異常 | module-overview(微服務管理) |
| Communication | 通知通道 | `/admin/communication/channels` | 通道設定表單、驗證狀態 | 建立通道、測試推播、停用通道 | communication-management |
| Communication | Bot 指令管理 | `/admin/communication/bot-commands` | 指令列表、權限設定 | 啟用指令、設定回應模板 | communication-management |
| Communication | 進度報告推送 | `/admin/communication/progress-reports` | 排程設定、推送紀錄 | 建立排程、重送失敗訊息 | communication-management |
| DR | 備份管理 | `/admin/dr/backups` | 備份列表、保留策略 | 立即備份、刪除過期備份 | disaster-recovery-management |
| DR | 回存操作 | `/admin/dr/restore` | 回存流程、版本選擇 | 執行回存、回存驗證 | disaster-recovery-management |
| DR | 演練管理 | `/admin/dr/drills` | 演練計畫、結果報告 | 建立演練、記錄結果 | disaster-recovery-management |
| DR | 多地部署狀態 | `/admin/dr/multi-region` | 地區狀態地圖、延遲監控 | 切換主區、故障切換演練 | disaster-recovery-management |
| Reports | 專案進度 | `/admin/reports/project-progress` | 進度圖表、里程碑達成率 | 匯出 PDF/CSV | reporting-management |
| Reports | 測試統計 | `/admin/reports/testing-stats` | 測試趨勢、缺陷密度 | 比較版本、匯出報表 | reporting-management |
| Reports | 部署歷史 | `/admin/reports/deployment-history` | 發版時序、成功率 | 查詢、匯出 | reporting-management |
| Settings | API Keys | `/admin/settings/api-keys` | 金鑰列表、權限範圍 | 建立/輪替/停用 Key | system-settings |
| Settings | 模型設定 | `/admin/settings/models` | Provider、Fallback、成本上限 | 調整模型路由、上線策略 | system-settings |
| Settings | 通知設定 | `/admin/settings/notifications` | 渠道、模板、頻率 | 套用模板、測試通知 | system-settings |
| Settings | 系統參數 | `/admin/settings/parameters` | 參數分組、變更紀錄 | 修改參數、回復預設 | system-settings |

## 頁面互動一致性
1. 列表頁右上固定主操作按鈕（例如「建立」「發版」「新增通道」）
2. 高風險操作（刪除、回滾、停用）必須二次確認與輸入驗證字串
3. 所有詳細頁保留「最近操作紀錄」區塊，方便稽核與問題追溯

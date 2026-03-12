# Page Review Checklist

版本：v0.6.1

## 目的
在進入開發任務拆解前，先完整檢查所有操作頁面、核心流程、權限與頁面間跳轉是否成立，避免後續因頁面設計變更而反覆重拆工程任務。

## 使用規則
1. 先逐頁確認「頁面目的、主要區塊、核心操作、權限、例外狀態」。
2. 再逐條走讀核心流程，確認頁面間跳轉、資料來源與狀態流轉一致。
3. 只有當 `必做頁面` 與 `必做流程` 全數標記為 `已確認`，才進入工程任務拆解。
4. 若頁面尚未定案，執行級任務只可保留在草稿，不應作為 sprint 承諾。
5. 頁面優先級請先以 [mvp-page-priority-list.md](/home/jackson/AI_JustProject/docs/19-implementation-plan/mvp-page-priority-list.md) 為準，再進行逐頁審查。

## 審查欄位建議
| 欄位 | 說明 |
| --- | --- |
| 狀態 | 未開始 / 審查中 / 已確認 / 待修正 |
| 優先級 | 必做 / 應做 / 延後 |
| 角色 | 會操作此頁面的主要角色 |
| 關聯流程 | 例如登入、專案管理、任務協作 |
| 待確認事項 | 欄位、操作、權限、跳轉、例外處理 |
| 結論 | 保留 / 修改 / 延後 |

## Gate 0：共用頁面
| 頁面 | 路由 | 優先級 | 角色 | 必查項目 |
| --- | --- | --- | --- | --- |
| Login | `/login` | 必做 | 全部未登入使用者 | 登入方式、錯誤提示、MFA 流程、登入後導向 |
| Forgot Password | `/forgot-password` | 應做 | 全部未登入使用者 | 是否納入 MVP、重設流程、郵件或通知依賴 |
| Profile | `/profile` | 應做 | 全部登入使用者 | 基本資料、安全設定、MFA 管理範圍 |
| Notification Center | `/notifications` | 必做 | 全部登入使用者 | 列表欄位、已讀/未讀、跳轉規則、優先級標記 |
| 403 | `/403` | 必做 | 全部使用者 | 無權限提示、申請權限入口、返回路徑 |
| 404 | `/404` | 必做 | 全部使用者 | 返回首頁或上一頁、錯誤情境 |

## Gate 1：後台頁面總檢
| 頁面 | 路由 | 優先級 | 角色 | 必查項目 |
| --- | --- | --- | --- | --- |
| Admin Dashboard | `/admin/dashboard` | 必做 | Super Admin / PM / Lead | KPI、告警、待辦、跳轉入口是否足夠 |
| Project List | `/admin/projects` | 必做 | PM / Lead | 篩選器、列表欄位、建立專案操作 |
| Project Detail | `/admin/projects/:projectId` | 必做 | PM / Lead | 概覽卡、活動流、子頁籤與摘要資料 |
| Project Members | `/admin/projects/:projectId/members` | 必做 | PM | 成員邀請、角色調整、移除限制 |
| Project Milestones | `/admin/projects/:projectId/milestones` | 應做 | PM / Lead | 是否 MVP 必做、與版本/任務的關聯方式 |
| Project Versions | `/admin/projects/:projectId/versions` | 應做 | PM / DevOps | 版本資料來源、發版與測試關聯 |
| Task List | `/admin/tasks` | 必做 | PM / Lead | 篩選、批次操作、建立任務入口 |
| Task Board | `/admin/tasks/board` | 必做 | PM / Lead / QA | 欄位、泳道、WIP 限制、拖拉規則 |
| Task Detail | `/admin/tasks/:taskId` | 必做 | PM / Lead / QA | 描述、狀態、指派、留言、活動流、外部連結 |
| Testing E2E Report | `/admin/testing/e2e` | 必做 | QA / PM | 報告列表、失敗案例、建立 bug 流程 |
| Deployment Releases | `/admin/deployments/releases` | 必做 | DevOps / PM | 版本列表、狀態、變更內容、環境篩選 |
| Deployment Environments | `/admin/deployments/environments` | 應做 | DevOps | 是否併入 release 頁、健康度展示 |
| AI Dev Logs | `/admin/ai-dev/logs` | 延後 | Admin / Lead | 是否保留在 MVP、資料來源是否存在 |
| User List | `/admin/users` | 延後 | Super Admin | MVP 是否需要完整 user management |
| Roles / Permission Matrix | `/admin/roles` | 延後 | Super Admin | MVP 是否先以 seed + 固定角色取代 |
| Reporting | `/admin/reports/*` | 延後 | PM / Admin | MVP 是否只保留 dashboard 摘要 |
| DR / Microservices / Communication / Settings | `/admin/dr/*` 等 | 延後 | Admin / DevOps | 是否明確排除於 MVP 首批實作 |

## Gate 2：前台頁面總檢
| 頁面 | 路由 | 優先級 | 角色 | 必查項目 |
| --- | --- | --- | --- | --- |
| Workspace Home | `/` | 必做 | 全部登入使用者 | 我的待辦、近期任務、通知摘要、快捷入口 |
| Project List | `/projects` | 應做 | PM / Dev / QA / DevOps | 是否為 MVP 首批必要頁，與首頁捷徑是否重複 |
| Project Detail | `/projects/:projectId` | 應做 | 專案成員 | 專案資訊深度、是否可延後至 admin 為主 |
| Task List | `/tasks` | 必做 | 全部專案成員 | 我的任務、追蹤任務、篩選與排序 |
| Task Board | `/tasks/board` | 應做 | PM / Dev / QA | 是否真的需要前台看板，或以後台看板為主 |
| Task Detail | `/tasks/:taskId` | 必做 | 任務相關人員 | 更新狀態、留言、附件、測試摘要 |
| AI Workbench | `/ai-workbench` | 必做 | Dev / QA / PM | MVP 互動範圍、輸入輸出、歷史紀錄 |
| Testing | `/testing` | 必做 | Dev / QA / PM | 與任務的關聯方式、列表或詳情結構 |
| Deployments | `/deployments` | 應做 | DevOps / PM | 是否以前台只讀摘要呈現 |
| Reports My | `/reports/my` | 延後 | 全部登入使用者 | 是否由首頁摘要取代 |
| Notifications | `/notifications` | 必做 | 全部登入使用者 | 與共用頁規格是否一致 |
| Profile | `/profile` | 應做 | 全部登入使用者 | 是否先保留最小版 |

## Gate 3：核心流程走查
| 流程 | 優先級 | 起點 | 終點 | 必查項目 |
| --- | --- | --- | --- | --- |
| 登入與導流 | 必做 | `/login` | admin dashboard 或 workspace home | 依角色導流、session 過期、無權限處理 |
| 建立專案 | 必做 | `/admin/projects` | `/admin/projects/:projectId` | 建立後資料完整性、預設成員、狀態 |
| 專案拆任務 | 必做 | 專案詳情 | 任務列表 / 任務詳情 | 任務從屬關係、建立入口、返回路徑 |
| 任務執行與回報 | 必做 | `/tasks` | `/tasks/:taskId` | 狀態流轉、留言、PR / commit 關聯 |
| 測試失敗建立缺陷 | 必做 | `/admin/testing/e2e` | 任務詳情或 bug 任務 | 建立缺陷入口與回寫規則 |
| 發版與部署觀測 | 必做 | `/admin/deployments/releases` | release / environment detail | 狀態來源、刷新頻率、環境切換 |
| 通知回跳 | 必做 | `/notifications` | 相關任務 / 專案 / 測試 / 部署頁 | 通知類型與 deep link 規則 |
| AI 建議回寫任務 | 應做 | `/ai-workbench` | `/tasks/:taskId` | 如何保存輸出、如何建立評論或子任務 |

## 開發前通關條件
1. `Gate 0` 到 `Gate 3` 的必做項目全部為 `已確認`。
2. 每個必做頁面都有明確的目標角色、主要區塊、主操作、API 依賴與例外狀態。
3. 每條必做流程都有明確起點、終點、權限、狀態流轉與通知節點。
4. 已確認哪些頁面屬於 MVP 首批、哪些延後，避免後續開發範圍漂移。
5. 完成上述條件後，才從 `execution-task-breakdown.md` 建立開發任務。

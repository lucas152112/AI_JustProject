# MVP Page Priority List

版本：v0.6.1

## 目的
把現有頁面從「完整規劃」收斂成「MVP 首批必做 / 應做 / 延後」，作為頁面審視與後續工程拆解的基準。

## 判斷原則
1. 直接支撐 `登入 -> 專案 -> 任務 -> 測試 -> 部署觀測 -> 通知` 主鏈路的頁面優先保留。
2. 沒有明確資料來源、沒有首批角色需求，或屬於治理型功能的頁面，先延後。
3. 若一個流程可由較少頁面完成，優先保留最短閉環，不重複做前後台功能。
4. 高風險設定、進階治理、報表彙總功能不列入 MVP 首批。

## MVP 首批必做

### 共用頁面
| 頁面 | 路由 | 保留原因 |
| --- | --- | --- |
| Login | `/login` | 所有角色的入口，支撐 session 與角色導流 |
| Notification Center | `/notifications` | 承接任務、測試、部署事件回跳 |
| 403 | `/403` | 權限模型上線後的必要例外頁 |
| 404 | `/404` | 基本站點錯誤處理 |

### 後台頁面
| 頁面 | 路由 | 保留原因 |
| --- | --- | --- |
| Admin Dashboard | `/admin/dashboard` | 提供 PM / 管理角色總覽入口與告警摘要 |
| Project List | `/admin/projects` | PM 建立與管理專案的主入口 |
| Project Detail | `/admin/projects/:projectId` | 承接專案摘要、活動與後續子流程 |
| Project Members | `/admin/projects/:projectId/members` | MVP 至少要能維護專案成員與角色 |
| Task List | `/admin/tasks` | PM / Lead 管理任務與批次操作的主入口 |
| Task Board | `/admin/tasks/board` | 任務狀態流轉與視覺化排程核心頁 |
| Task Detail | `/admin/tasks/:taskId` | 任務描述、狀態、留言、活動流、關聯資訊核心頁 |
| Testing E2E Report | `/admin/testing/e2e` | MVP 測試觀測主入口，可直接建立缺陷 |
| Deployment Releases | `/admin/deployments/releases` | MVP 部署觀測與版本查看主入口 |

### 前台頁面
| 頁面 | 路由 | 保留原因 |
| --- | --- | --- |
| Workspace Home | `/` | 個人待辦與通知摘要入口 |
| Task List | `/tasks` | 開發與測試人員的日常工作入口 |
| Task Detail | `/tasks/:taskId` | 回報進度、留言、關聯 PR / commit 的核心頁 |
| AI Workbench | `/ai-workbench` | MVP 規劃已列入，且是 AI 協作最小閉環主頁 |
| Testing | `/testing` | 開發者 / QA 查看與任務相關測試結果的必要頁 |

## 應做

### 共用頁面
| 頁面 | 路由 | 保留理由 | 可延後原因 |
| --- | --- | --- | --- |
| Profile | `/profile` | 使用者需要基本帳號資訊頁 | 不影響 MVP 主鏈路，可先做最小版 |
| Forgot Password | `/forgot-password` | 完整登入體驗常見需要 | 若前期帳號由管理員建立，可先延後 |

### 後台頁面
| 頁面 | 路由 | 保留理由 | 可延後原因 |
| --- | --- | --- | --- |
| Project Milestones | `/admin/projects/:projectId/milestones` | PM 常用規劃工具 | 可先以專案詳情摘要取代 |
| Project Versions | `/admin/projects/:projectId/versions` | 有助串接測試與部署 | MVP 可先由 release 頁承接版本資訊 |
| Deployment Environments | `/admin/deployments/environments` | 觀察環境健康度有價值 | 可先合併到 releases 頁呈現摘要 |
| Unit Test Report | `/admin/testing/unit` | 測試可視性更完整 | MVP 可先以 E2E 或統一 testing 頁為主 |

### 前台頁面
| 頁面 | 路由 | 保留理由 | 可延後原因 |
| --- | --- | --- | --- |
| Project List | `/projects` | 讓一般成員從前台查看參與專案 | MVP 可先由首頁捷徑與任務入口替代 |
| Project Detail | `/projects/:projectId` | 專案成員可在前台追蹤概況 | MVP 可先以後台 project detail 為主 |
| Task Board | `/tasks/board` | 前台看板對協作有幫助 | 與後台看板高度重疊，可後做 |
| Deployments | `/deployments` | 提供前台只讀部署資訊 | MVP 可先由後台 release 頁提供觀測 |

## 延後

### 後台頁面
| 頁面群組 | 路由 | 延後原因 |
| --- | --- | --- |
| User Management | `/admin/users*` | 屬治理功能，MVP 可先用 seed 帳號與固定角色 |
| Role & Permission | `/admin/roles*` | 權限矩陣可先以文件與 seed 固定，不急著做 UI |
| AI Dev Logs / Bugfix / Model Stats | `/admin/ai-dev/*` | 進階治理與分析頁，不是首批操作閉環必要項 |
| Testing Failures / Trends | `/admin/testing/failures`、`/admin/testing/trends` | 屬分析增強頁，首批只需基本報告查看 |
| Deployment Rollback | `/admin/deployments/rollback` | 高風險操作，MVP 可先只讀觀測，不開放 UI 執行 |
| Microservices | `/admin/microservices/*` | 維運治理頁，非主鏈路 |
| Communication | `/admin/communication/*` | 通知通道管理屬後期治理 |
| DR Management | `/admin/dr/*` | 災難復原屬明確延後範圍 |
| Reporting | `/admin/reports/*` | 彙總報表可由 dashboard 摘要暫代 |
| System Settings | `/admin/settings/*` | 高風險平台設定，MVP 先不開放 UI 管理 |

### 前台頁面
| 頁面 | 路由 | 延後原因 |
| --- | --- | --- |
| Reports My | `/reports/my` | 可先由首頁摘要與通知替代 |

## 建議的首批頁面閉環
1. 共用：`/login`、`/notifications`、`/403`、`/404`
2. 後台：`/admin/dashboard`、`/admin/projects`、`/admin/projects/:projectId`、`/admin/projects/:projectId/members`、`/admin/tasks`、`/admin/tasks/board`、`/admin/tasks/:taskId`、`/admin/testing/e2e`、`/admin/deployments/releases`
3. 前台：`/`、`/tasks`、`/tasks/:taskId`、`/ai-workbench`、`/testing`

## 建議下一步
1. 先逐頁確認「MVP 首批必做」清單是否接受。
2. 若接受，再把 [page-review-checklist.md](/home/jackson/AI_JustProject/docs/19-implementation-plan/page-review-checklist.md) 中對應頁面標為首批審查範圍。
3. 等必做頁面與核心流程定案後，再啟用 [execution-task-breakdown.md](/home/jackson/AI_JustProject/docs/19-implementation-plan/execution-task-breakdown.md) 拆工程任務。

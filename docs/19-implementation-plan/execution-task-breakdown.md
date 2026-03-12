# Execution Task Breakdown

版本：v0.6.1

## 使用方式
1. 本文件用來承接 `implementation-backlog.md`，將 phase backlog 繼續拆到可分派的執行任務。
2. 啟用本文件前，需先完成 [page-review-checklist.md](/home/jackson/AI_JustProject/docs/19-implementation-plan/page-review-checklist.md) 的必做頁面與必做流程確認。
3. 狀態欄位建議使用：`草稿`、`未開始`、`進行中`、`已完成`、`阻塞`。
4. 若頁面與操作流程尚未定案，本文件內容僅可視為草稿，不建議直接排入 sprint。
5. 若要建立 issue，可直接以「任務編號 + 任務名稱」作為標題。
6. 每個任務至少需補上負責人、預估工時與實際完成日期。

## Phase 0：工程骨架

### P0-1 Repo / Workspace 基礎
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P0-1-1 | 確認 monorepo workspace 結構與命名規則 | 無 | root `package.json`、`pnpm-workspace.yaml`、目錄規範 | `apps/`、`services/`、`packages/`、`infra/` 目錄可被 workspace 正確辨識 |
| P0-1-2 | 補齊 package manager lock 與安裝流程 | P0-1-1 | `pnpm-lock.yaml`、安裝說明 | `pnpm install` 可完成且不產生未解決 workspace 錯誤 |
| P0-1-3 | 建立共用開發指令與根層腳本約定 | P0-1-1 | `dev/build/lint/test/typecheck` 指令規範 | root scripts 可成功呼叫各 workspace 對應腳本 |
| P0-1-4 | 建立 `.gitignore`、`.env.example`、本機啟動文件 | P0-1-2 | 環境變數樣板與啟動說明 | 新成員可依文件完成本機啟動 |

### P0-2 前端 App Shell
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P0-2-1 | 選定 admin / workspace 前端框架與 runtime | P0-1-1 | 框架決策記錄 | 兩個 app 的啟動方式一致且可維護 |
| P0-2-2 | 建立 admin app shell、基礎 layout 與路由容器 | P0-2-1 | `apps/admin` 基礎頁框 | 可顯示 dashboard / project / task 路由占位頁 |
| P0-2-3 | 建立 workspace app shell、首頁與任務路由容器 | P0-2-1 | `apps/workspace` 基礎頁框 | 可顯示首頁 / task 路由占位頁 |
| P0-2-4 | 建立共用 design tokens 與 UI package 最小元件 | P0-2-2 | `packages/ui`、`packages/config` 基礎能力 | admin / workspace 可共用基礎元件與樣式 token |

### P0-3 BFF 與服務骨架
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P0-3-1 | 選定 BFF / service runtime 與 HTTP 框架 | P0-1-1 | 技術決策記錄 | `apps/bff` 與 `services/*` 採一致執行模式 |
| P0-3-2 | 建立 BFF 啟動入口、health check、錯誤處理 | P0-3-1 | `apps/bff` 可啟動 API 骨架 | 提供 `/health` 或等價健康檢查端點 |
| P0-3-3 | 建立 identity / project / task / testing / deployment service 統一啟動介面 | P0-3-1 | `services/*` 最小服務入口 | 各 service 可獨立啟動並輸出服務資訊 |
| P0-3-4 | 建立 service 間共用 response / error / logging 格式 | P0-3-2 | 共用型別與錯誤格式 | BFF 與 services 回傳格式一致 |

### P0-4 資料層骨架
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P0-4-1 | 選定 migration 工具、ORM 或 query builder | P0-3-1 | 資料層決策記錄 | 後續 schema 能以同一套工具管理 |
| P0-4-2 | 建立 DB / Redis 連線設定與 env 欄位 | P0-4-1 | config module、env 欄位 | 本機可使用 env 初始化資料連線 |
| P0-4-3 | 建立 migration、seed、資料夾結構與範例檔 | P0-4-1 | migration / seed skeleton | 可執行一次範例 migration 與 seed |
| P0-4-4 | 建立基礎審計欄位與 timestamp 慣例 | P0-4-3 | schema naming / audit convention | 後續 schema 具一致欄位規格 |

### P0-5 工程品質與 CI
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P0-5-1 | 建立 lint / format / typecheck / test 工具鏈 | P0-1-3 | 工具設定檔與 scripts | root 可執行品質檢查 |
| P0-5-2 | 補齊各 workspace placeholder test 與 smoke test | P0-5-1 | 基礎測試檔 | `pnpm test` 至少覆蓋骨架驗證 |
| P0-5-3 | 建立 CI pipeline 骨架 | P0-5-1 | CI 設定、Tekton 或等價流程 | PR 可跑 lint / test 基本流程 |
| P0-5-4 | 建立 commit / branch / release 命名約定文件 | P0-5-1 | workflow 文件 | 團隊可依統一規則提交變更 |

## Phase 1：身份與權限

### P1-1 Auth 流程
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P1-1-1 | 設計 login / logout / refresh session API 合約 | P0-3-4 | API contract | 合約涵蓋成功、失敗、過期情境 |
| P1-1-2 | 實作 identity schema：users / roles / permissions | P0-4-3 | migration、seed | 基本表結構可建立 |
| P1-1-3 | 實作 login / logout / refresh session service | P1-1-1、P1-1-2 | auth service logic | 可建立 session 並驗證登入狀態 |
| P1-1-4 | 在 BFF 建立 `POST /auth/login`、`GET /me` 入口 | P1-1-3 | BFF auth routes | 前端可透過 BFF 取得登入結果與當前使用者 |

### P1-2 RBAC 與守門
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P1-2-1 | 定義 MVP 角色矩陣與 permission mapping | P1-1-2 | 角色權限對照表 | Super Admin / PM / Developer / Tester / DevOps 權限明確 |
| P1-2-2 | 實作 API permission middleware | P1-2-1、P1-1-4 | BFF / service middleware | 未授權請求會被拒絕並記錄原因 |
| P1-2-3 | 實作前端 route guard 與 session 驗證 | P1-1-4 | admin / workspace guard | 未登入或無權限使用者會被導回正確頁面 |
| P1-2-4 | 建立預設角色與測試帳號 seed data | P1-2-1 | seed scripts | 本機可快速建立 demo 帳號驗證權限 |

### P1-3 稽核與安全最小版
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P1-3-1 | 建立 audit_logs schema 與寫入介面 | P0-4-4 | migration、logger API | 登入與權限失敗事件可被記錄 |
| P1-3-2 | 補齊 auth / RBAC 單元測試與整合測試 | P1-2-4 | test cases | 主要登入與授權情境可通過 |
| P1-3-3 | 建立 session / token 安全設定文件 | P1-1-3 | security notes | 有明確的過期、刷新與儲存策略 |

## Phase 2：專案與任務

### P2-1 專案管理
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P2-1-1 | 建立 projects / project_members schema 與 migration | P0-4-3 | schema、migration | 可建立專案與成員關聯 |
| P2-1-2 | 實作 project service CRUD 與 member 管理邏輯 | P2-1-1、P1-2-2 | service logic | 可建立、查詢、更新專案與成員 |
| P2-1-3 | 建立 `GET/POST /projects`、`GET/PATCH /projects/:id` | P2-1-2 | BFF routes | API 合約符合 technical deliverables |
| P2-1-4 | 建立 admin project list / detail 頁面 | P2-1-3、P0-2-2 | 前端頁面 | PM 可瀏覽與編輯專案 |

### P2-2 任務管理
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P2-2-1 | 建立 tasks / task_comments / task_activity_logs schema | P0-4-3 | schema、migration | 任務、評論、活動流表可建立 |
| P2-2-2 | 定義任務狀態機、優先級、指派欄位規格 | P2-2-1 | task domain spec | 狀態流轉與欄位約束明確 |
| P2-2-3 | 實作 task CRUD 與狀態流轉 service | P2-2-2、P1-2-2 | task service | 可建立任務、更新狀態、指派負責人 |
| P2-2-4 | 建立 `GET/POST /tasks`、`GET/PATCH /tasks/:id`、`POST /tasks/:id/comments` | P2-2-3 | BFF routes | API 可支援列表、詳情、更新與留言 |
| P2-2-5 | 建立 admin 任務列表 / 看板 / 詳情頁 | P2-2-4、P0-2-2 | admin task pages | PM / Lead 可操作任務主流程 |
| P2-2-6 | 建立 workspace 任務列表 / 詳情頁 | P2-2-4、P0-2-3 | workspace task pages | Developer / Tester 可查看與更新自己的任務 |

### P2-3 協作最小版
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P2-3-1 | 建立 task comment / activity feed 寫入規則 | P2-2-3 | domain rules | 狀態變更、留言可產生紀錄 |
| P2-3-2 | 支援 PR / commit 關聯欄位與顯示占位 | P2-2-2 | 欄位、UI 占位 | 任務詳情可顯示外部開發關聯資訊 |
| P2-3-3 | 補齊 project / task API 與頁面測試 | P2-1-4、P2-2-6 | test cases | 專案到任務主鏈路可被驗證 |

## Phase 3：測試與部署觀測

### P3-1 測試報告
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P3-1-1 | 建立 test_runs / test_cases schema | P0-4-3 | schema、migration | 測試資料可被儲存 |
| P3-1-2 | 實作 testing service 查詢 API | P3-1-1、P1-2-2 | service logic | 可依專案、版本、結果查詢報告 |
| P3-1-3 | 建立 `GET /testing/runs` 與詳情查詢端點 | P3-1-2 | BFF routes | 前端可取得測試報告列表與基本詳情 |
| P3-1-4 | 建立 admin 測試報告列表 / 詳情頁 | P3-1-3、P0-2-2 | 前端頁面 | Tester / PM 可瀏覽測試結果 |

### P3-2 部署觀測
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P3-2-1 | 建立 releases / deployments schema | P0-4-3 | schema、migration | 版本與部署記錄可被儲存 |
| P3-2-2 | 實作 deployment service 查詢 API | P3-2-1、P1-2-2 | service logic | 可依環境、版本查詢部署狀態 |
| P3-2-3 | 建立 `GET /deployments/releases` 與環境概況端點 | P3-2-2 | BFF routes | 前端可取得 release list 與環境摘要 |
| P3-2-4 | 建立 admin release list / environment overview 頁面 | P3-2-3、P0-2-2 | 前端頁面 | DevOps / PM 可查看部署觀測資訊 |

### P3-3 讀取鏈路整合
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P3-3-1 | 定義測試與部署資料匯入策略 | P3-1-2、P3-2-2 | 匯入規格 | 清楚定義手動匯入或外部同步方式 |
| P3-3-2 | 建立 demo data 與查詢範例 | P3-3-1 | seed / fixture | 本機可快速展示報告與 release 畫面 |
| P3-3-3 | 補齊 testing / deployment API 測試 | P3-1-4、P3-2-4 | test cases | 讀取主流程穩定可驗證 |

## Phase 4：AI 與通知最小版

### P4-1 Notification Center
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P4-1-1 | 建立 notifications schema 與讀取 / 已讀 API | P0-4-3、P1-2-2 | schema、service、route | 使用者可查詢通知並標記已讀 |
| P4-1-2 | 定義 task / testing / deployment 事件通知規則 | P2-2-3、P3-1-2、P3-2-2 | 事件對應表 | 主要事件都能映射到通知中心 |
| P4-1-3 | 建立 notification center 頁面 | P4-1-1、P0-2-2 | 前端頁面 | 使用者可查看最近通知與狀態 |

### P4-2 AI Workbench 最小版
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P4-2-1 | 建立 AI interaction log schema | P0-4-3 | schema、migration | 可記錄 AI 請求與回應摘要 |
| P4-2-2 | 定義 AI workbench MVP 功能邊界 | 無 | 單頁規格 | 僅保留輸入、輸出、歷史紀錄最小閉環 |
| P4-2-3 | 建立 AI workbench 單頁與 log 查詢 | P4-2-1、P4-2-2、P0-2-3 | workspace 頁面 / BFF route | 可執行最小互動並保存紀錄 |
| P4-2-4 | 補齊通知與 AI 最小版測試 | P4-1-3、P4-2-3 | test cases | 通知與 AI 頁面基本流程可驗證 |

## Phase 5：收斂與發版

### P5-1 測試補強
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P5-1-1 | 補齊 auth / project / task / testing / deployment 單元測試 | Phase 1-4 完成主要功能 | 單元測試 | 核心 domain logic 有自動化驗證 |
| P5-1-2 | 建立主鏈路 integration 測試 | P5-1-1 | API / service integration tests | 專案到任務主流程可整體驗證 |
| P5-1-3 | 建立關鍵頁面 E2E smoke test | P5-1-2 | E2E cases | login、project、task、report、release 頁面可 smoke 通過 |

### P5-2 Demo / Seed / 文件
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P5-2-1 | 建立 demo data 與角色權限驗證腳本 | P5-1-2 | seed / verify scripts | 可快速建立展示資料並檢查權限 |
| P5-2-2 | 更新 env、安裝、啟動、部署文件 | P5-2-1 | README / docs | 新成員可依文件啟動 MVP |
| P5-2-3 | 補齊 API contract 與錯誤碼文件 | Phase 1-4 API 完成 | API docs | 前後端與 QA 對接口理解一致 |

### P5-3 發版準備
| 編號 | 任務 | 依賴 | 產出 | 驗收 |
| --- | --- | --- | --- | --- |
| P5-3-1 | 建立 dev / test 環境部署腳本 | P3-2-4、P5-2-2 | infra scripts | 可在 dev / test 環境部署基本服務 |
| P5-3-2 | 建立 MVP 發版檢查清單 | P5-3-1 | release checklist | 包含功能、測試、回滾、資料檢查項 |
| P5-3-3 | 執行一次 MVP dry run 與缺口修正 | P5-3-2 | 驗證紀錄 | 主要流程可完整演練 |

## 建議追蹤欄位
| 欄位 | 說明 |
| --- | --- |
| 狀態 | 未開始 / 進行中 / 已完成 / 阻塞 |
| 優先級 | P0 / P1 / P2 / P3 |
| 負責人 | 主要執行者 |
| 預估工時 | 以人日或人時表示 |
| 實際完成日 | 完成日期 |
| 依賴任務 | 例如 `P0-3-1` |
| 備註 | 風險、決策或阻塞原因 |

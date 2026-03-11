# Page Permission Mapping

版本：v0.5.1

## 角色定義
1. Super Admin
2. System Admin
3. PM
4. Backend Developer
5. Frontend Developer
6. Tester
7. DevOps
8. Operator

## 權限代碼
1. `R`：Read（檢視）
2. `W`：Write（新增/編輯）
3. `X`：Execute（執行動作，如發版、回滾）
4. `A`：Admin（權限管理/系統管理）
5. `-`：無權限

## 頁面群組權限矩陣
| 頁面群組 | Super Admin | System Admin | PM | Backend Dev | Frontend Dev | Tester | DevOps | Operator |
|---|---|---|---|---|---|---|---|---|
| Dashboard | R/W/A | R/W/A | R/W | R | R | R | R | R |
| User Management | R/W/A | R/W/A | R | - | - | - | - | - |
| Role & Permission | R/W/A | R/W/A | R | - | - | - | - | - |
| Project Management | R/W/A | R/W | R/W | R/W | R/W | R | R | R |
| Task Management | R/W/A | R/W | R/W | R/W | R/W | R/W | R | R |
| AI Development | R/W/A | R/W | R/W | R/W | R/W | R/W | R | R |
| Testing | R/W/A | R/W | R/W | R | R | R/W/X | R | R |
| Deployment | R/W/A | R/W/X | R | R | R | R | R/W/X | R/W/X |
| Microservices | R/W/A | R/W | R | R | R | R | R/W/X | R/W |
| Communication | R/W/A | R/W | R/W | R | R | R | R/W | R/W |
| DR Management | R/W/A | R/W/X | R | - | - | R | R/W/X | R/W/X |
| Reporting | R/W/A | R/W | R/W | R | R | R | R | R |
| System Settings | R/W/A | R/W/A | R | - | - | - | R | - |

## 重要操作授權規則
1. 發版（Deploy Release）：`Super Admin/System Admin/DevOps/Operator` 可執行 `X`
2. 回滾（Rollback）：`Super Admin/System Admin/DevOps/Operator` 可執行 `X`，且需二次確認
3. 權限編輯（Role Matrix Update）：僅 `Super Admin/System Admin`
4. API Key 輪替：僅 `Super Admin/System Admin`
5. DR 回存：`Super Admin/System Admin/DevOps/Operator` 可執行 `X`

## 前台頁面權限補充
1. `/projects`、`/tasks`：所有專案成員可讀，寫入依專案角色
2. `/ai-workbench`：PM/Dev/Tester 可用，Operator 預設只讀
3. `/deployments` 前台頁：預設只讀，僅 DevOps/Operator 可執行操作
4. `/reports/my`：個人可讀，跨專案彙總資料需依專案成員權限聚合
5. `/notifications`：僅可讀取本人通知，不可跨帳號查詢

## 權限實作分層
1. 路由層：控制是否可進頁
2. 元件層：控制是否顯示按鈕、欄位、批次操作
3. API 層：最終驗證資源與動作
4. 稽核層：記錄拒絕與成功的高風險操作

## 實作建議
1. 前端使用路由守衛（Route Guard）控制頁面進入
2. 後端 API 再次驗證操作權限，避免前端繞過
3. 權限快照寫入稽核日誌（誰、何時、改了什麼）

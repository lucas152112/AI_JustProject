# Development Workflows

版本：v0.5.1

## 流程目標
建立從需求承接、開發、送審到合併的標準開發節奏，並與 AI 協作、測試與部署流程串接。

## 主要角色
- PM：確認需求優先級
- Tech Lead：提供技術方案與 code review 準則
- Developer：實作功能、修正缺陷
- AI Agent：輔助產出 patch、測試與修復建議

## 前置條件
1. 任務已被建立且具備清楚驗收條件
2. 開發分支策略與 commit 規範已定義
3. CI、單元測試與 E2E 測試已接入 repo

## 主流程
1. Developer 從任務頁認領工作並確認需求
2. 建立 feature branch，關聯 task ID 與版本
3. Developer 實作功能或修正問題
4. 視需要呼叫 AI Agent 協助產生程式、測試或修復建議
5. Developer 補齊 unit test、整合測試或文件
6. 提交 commit 並發起 PR
7. 系統自動觸發 lint、build、test
8. Tech Lead 或 Reviewer 完成 code review
9. 合併後自動進入測試與部署後續流程

## 任務狀態流轉
| 狀態 | 說明 |
|---|---|
| Todo | 尚未開始 |
| In Progress | 開發中 |
| In Review | 等待 code review |
| Blocked | 被依賴或外部問題阻塞 |
| Ready for Test | 已可進入測試 |
| Done | 已完成且合併 |

## AI 協作節點
1. 需求轉技術方案
2. 樣板程式或重構建議
3. 測試案例產生
4. CI 失敗時提供修復方向

## 例外處理
### Review 未通過
1. Reviewer 留下變更意見
2. 任務狀態回到 `In Progress`
3. 修正後重新推送並再送審

### CI 失敗
1. 系統將失敗訊息回寫到 PR 與任務
2. Developer 或 AI Agent 先分析問題類型
3. 修正後重新觸發 pipeline

### 需求不明確
1. Developer 將任務標記為 `Blocked`
2. PM/Tech Lead 補充規格或調整範圍
3. 更新驗收條件後再恢復開發

## 輸入與輸出
### 輸入
- 任務描述
- 設計文件與 API 規格
- 既有程式碼與測試基線

### 輸出
- 功能程式碼
- 測試案例與文件更新
- PR 與 review 記錄

## 指標建議
1. Lead time
2. PR 平均審核時間
3. CI 一次成功率
4. 任務阻塞時間

# Task Management

版本：v0.5.1

## 模組目標
提供任務拆解、指派、狀態追蹤、Git 關聯與跨角色協作。

## 核心功能
1. 建立任務、子任務、Checklist
2. 指派負責人、協作人與 Reviewer
3. 維護優先級、標籤、預估工時與截止日
4. 關聯 PR、commit、測試結果與缺陷
5. 支援表格、看板與詳細頁檢視

## 狀態流轉
1. `Todo`
2. `In Progress`
3. `In Review`
4. `Ready for Test`
5. `Done`
6. `Blocked`

## 規則
1. 任務必須隸屬專案
2. 任務關閉前需滿足驗收條件
3. `Blocked` 任務需填寫阻塞原因與預計解法
4. 狀態異動需回寫活動流與通知中心

## 重要欄位
1. Task ID、標題、描述、附件
2. 優先級、狀態、截止日
3. 關聯版本、關聯測試、關聯 bug
4. Git 關聯：branch、PR、commit

## 指標建議
1. 任務完成率
2. 逾期率
3. 平均 lead time
4. Blocked 任務占比

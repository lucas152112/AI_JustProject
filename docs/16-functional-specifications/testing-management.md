# Testing Management

版本：v0.5.1

## 模組目標
集中管理單元測試、整合測試、E2E 測試與缺陷回饋。

## 核心功能
1. Unit Test 報告
2. Integration / API 驗證結果
3. E2E Test 報告與失敗截圖
4. Failure Analysis 與 root cause 分類
5. 趨勢統計與版本比較

## 關鍵規則
1. 關鍵測試失敗需阻擋部署
2. 測試失敗需保留 log、trace 與執行上下文
3. 可指定重跑範圍，不必每次全量重跑
4. 測試結果需可追溯到 commit、PR、版本

## 報告欄位
1. Pipeline ID、分支、commit SHA
2. 測試層級、執行時間、結果
3. 失敗案例、責任人、重跑次數
4. 覆蓋率、通過率、趨勢差異

## 指標建議
1. 通過率
2. 重跑率
3. 缺陷再開率
4. 平均修復時間

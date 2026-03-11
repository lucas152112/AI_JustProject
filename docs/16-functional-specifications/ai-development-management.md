# AI Development Management

版本：v0.5.1

## 模組目標
管理 AI 協作開發過程中的 prompt、回應、修復歷史、模型成本與效果。

## 核心功能
1. AI coding log 查詢
2. Prompt/response 歷史保存與重用
3. Bug fix history 與 patch 採納率追蹤
4. 模型使用統計、成本分析、成功率比較
5. 建立模板與推薦最佳策略

## 主要資料
1. 任務 ID、使用者、模型、provider
2. Prompt 類型、token 用量、執行時間
3. 回應摘要、是否採納、結果狀態
4. 關聯測試結果與缺陷編號

## 關鍵規則
1. 敏感資料需遮罩後才可存入 log
2. 失敗的 AI 建議仍需保留審計紀錄
3. 自動修補 patch 不可直接入主分支，需人工審核
4. 模型切換需有 fallback 與成本上限

## 指標建議
1. Patch 採納率
2. 平均 token 成本
3. 成功修復率
4. 單任務 AI 互動次數

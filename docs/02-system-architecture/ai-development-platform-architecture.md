# AI Development Platform Architecture

版本：v0.5.1

## 目標
將開發工具、模型路由、測試驗證與自動修錯串成可治理的 AI 開發平台。

## 組成
1. 開發端：Copilot CLI / Codex CLI / IDE
2. AI 協作：Aider、Prompt 模板、策略管理
3. 模型層：OpenRouter、Local Model、Fallback Router
4. 驗證層：Unit Test、E2E、報告回寫

## 核心流程
1. 開發者提交需求或程式片段
2. AI 協助產出程式、測試或修補建議
3. 測試結果回寫任務與模型統計
4. 失敗時自動轉入 bug fix 流程

# AI Coding Workflow

## 主要工具
- GitHub Copilot CLI
- Codex CLI

## 定位
這兩個工具是主要開發入口，用於：
- 功能開發
- 程式碼重構
- 初版單元測試撰寫
- 文件與腳本輔助產生

## 基本流程
1. 開發者或 AI 先完成需求拆分
2. 使用 GitHub Copilot CLI / Codex CLI 進行功能實作
3. 補齊單元測試
4. commit / push
5. 由 GitHub Actions 觸發 Tekton 進行 CI 驗證

## 原則
- AI 產生的程式碼仍需納入版本控制與測試流程
- 重要功能需補文件，不可只保留 prompt 或對話記錄

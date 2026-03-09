# AI Coding Workflow

主要開發工具：
- GitHub Copilot CLI
- Codex CLI

開發流程：
1. 使用 AI 工具實作功能
2. 補齊單元測試
3. Commit / Push
4. GitHub Actions 觸發 Tekton
5. Compile + Unit Test
6. 部署至測試環境後跑 E2E

# ai-just-project

AI Just Project 是一套以 AI 輔助規劃、開發、測試、部署、維運與協作為核心的專案平台規劃文件集合。此 repo 以文件先行方式整理系統邊界、技術架構、CI/CD、AI 開發工作流、通訊協作、災難復原與多環境營運策略，作為後續建立正式 GitHub repository、monorepo 與系統實作的基礎。

## 目標
- 建立可持續擴充的 AI 專案開發平台
- 支援 Web / H5、行動端、管理後台與微服務 API
- 以 Kubernetes 為基礎承載開發、測試、部署與營運流程
- 導入 GitHub Actions + Tekton 的分層式 CI/CD
- 導入 GitHub Copilot CLI、Codex CLI、Aider、OpenRouter 等 AI 工具協作開發
- 以 E2E 測試作為功能完成與交付的主要驗證方式
- 支援 Telegram、Discord、LINE、fastIM 的通訊與協作整合
- 補齊資料備份、K8s 重建與未來多地部署的災難復原能力

## 已知基礎設施
- Kubernetes cluster
  - Control Plane
  - Worker Nodes
- Bastion / Gateway
  - Nginx 跳板機
- 專用 CI/CD Node
  - Tekton
  - Package cache
- 環境分層
  - dev
  - test
  - pp
  - prod

## AI 開發主軸
- 主要程式開發工具：GitHub Copilot CLI、Codex CLI
- 開發觸發層：GitHub Actions
- CI 執行層：Tekton
- Bug 修復工具：Aider + OpenRouter
- Bug 修復模型：DeepSeek Coder V3.2、Qwen3 Coder 32B
- 測試主軸：E2E

## 高階架構
```text
Developer / PM / QA / Ops
        │
        ▼
Web / Mobile / Admin / IM
        │
        ▼
Bastion / Nginx
        │
        ▼
Kubernetes Cluster
├─ Frontend
├─ Admin
├─ BFF
├─ Backend Microservices
├─ Communication Service
├─ AI Services
└─ Background Jobs

GitHub -> GitHub Actions -> Tekton -> K8s Environments
```

## 文件導覽
- `docs/00-overview`：專案定位、目標與總覽
- `docs/02-system-architecture`：整體架構、微服務、BFF、事件驅動
- `docs/03-ai-development-platform`：AI 開發、AI 修錯、模型策略
- `docs/08-devops`：K8s、CI/CD、Tekton、GitHub Actions、環境設計
- `docs/11-testing`：測試策略、單元測試、E2E、AI 修錯流程
- `docs/14-communication-collaboration`：通訊協作與 IM 整合
- `docs/15-disaster-recovery`：備份、回存、K8s 還原與多地部署

## 版本
目前文件版號請參考 `VERSION.md`。

# 系統架構

## 目標
定義 ai-just-project 的整體系統邊界、服務責任與互動方式。

## 系統分區
```text
Frontend Zone
├─ Web (H5)
├─ Mobile App
└─ Admin Backend

Backend Zone
├─ API Gateway / Ingress
├─ BFF
└─ Backend Microservices

AI Zone
├─ AI Coding Workflow
├─ AI Bug Fix Workflow
└─ Model Router / Provider Integration

Ops Zone
├─ GitHub Actions
├─ Tekton
├─ Observability
└─ Disaster Recovery
```

## 技術方向
- Web：Nuxt.js（規劃）
- Mobile：Flutter（規劃）
- Backend：Rust + Axum 微服務
- Data：MySQL、Redis、MongoDB
- Infra：Kubernetes、Nginx、Tekton

## 核心限制
- 現有叢集為單地 K8s
- 需預留未來多地部署能力
- AI 工具需納入正式流程，不可只靠人工臨時操作

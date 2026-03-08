# 架構總覽

## 邏輯分層
- Product / Planning Layer
- Client Layer
- Gateway / Access Layer
- BFF Layer
- Backend Microservice Layer
- Data Layer
- AI Development & Automation Layer
- DevOps / Observability / DR Layer

## 主要組成
```text
Clients
├─ Web (H5)
├─ Mobile App
└─ Admin Backend

Access
├─ Nginx Bastion / Gateway
└─ API Gateway / Ingress

Application
├─ BFF
├─ Auth Service
├─ User Service
├─ Project / Task Service
├─ Communication Service
├─ Report Service
├─ AI Service
└─ Billing / Subscription (future)

Infrastructure
├─ Kubernetes
├─ Tekton
├─ GitHub Actions Trigger
├─ Package Cache
├─ Monitoring / Logging
└─ Backup / Recovery
```

## 架構原則
- 前端、後端、管理後台責任分離
- 後端微服務同時支援前台與後台
- 文件與流程設計需能對應實際部署環境
- 所有關鍵流程均需可觀測與可回復

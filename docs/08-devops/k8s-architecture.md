# Kubernetes Architecture

## 現況
- 已有 Kubernetes 環境
- 已有 Control Plane
- 已有 Worker Nodes
- 已有 Nginx 跳板機

## 建議部署邊界
```text
Internet / User
      │
      ▼
Bastion / Nginx
      │
      ▼
Kubernetes Cluster
├─ Control Plane
└─ Worker Nodes
   ├─ Web Services
   ├─ Admin Services
   ├─ BFF Services
   ├─ Backend Microservices
   ├─ Communication Service
   ├─ AI Services
   └─ Background Jobs
```

## 原則
- 應用部署與環境配置需版本化
- 建立重建叢集的標準化流程

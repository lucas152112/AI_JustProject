# 微服務架構

## 原則
- 服務拆分以業務責任為主
- 優先先集中管理，再依流量或責任界線逐步拆細
- 保留事件驅動與背景工作能力

## 建議服務
- auth-service
- user-service
- project-service
- task-service
- report-service
- communication-service
- ai-service
- notification-service
- bot-gateway-service（可先併入 communication-service）

## 部署原則
- 各服務皆以容器化部署於 Kubernetes
- 使用獨立 ConfigMap / Secret / Service
- 關鍵服務需具備健康檢查與 metrics

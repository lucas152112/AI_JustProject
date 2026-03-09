# Kubernetes Cluster Recovery

K8s 重建流程：

1. 重建基礎主機
2. 重建 Control Plane
3. Worker Node 加入
4. 套用 Namespace / RBAC / Secret / Config
5. 部署基礎服務
6. 回存資料庫
7. 部署應用服務
8. 執行健康檢查與 E2E 驗證

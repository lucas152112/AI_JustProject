# Kubernetes Cluster Recovery

## 目標
當整個叢集故障時，可依標準化流程重建環境、還原資料並恢復服務。

## 還原步驟
1. 重建基礎主機
2. 重建 Control Plane
3. Worker Node 重新加入
4. 建立 Ingress / Gateway
5. 套用 Namespace / RBAC / Secret / Config
6. 部署資料層依賴
7. 回存資料庫
8. 部署應用服務
9. 執行健康檢查與 E2E 驗證

## 原則
- 盡量以 Helm / YAML / Git 版本化配置重建
- 不依賴人工口述重建

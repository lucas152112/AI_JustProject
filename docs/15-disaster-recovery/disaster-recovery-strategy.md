# Disaster Recovery Strategy

DR 包含三層：

1. 資料層備份 / 回存
2. 平台層 K8s 重建
3. 未來多地部署與切換規劃

目前建議：
- RPO：24 小時內
- RTO：24 小時內

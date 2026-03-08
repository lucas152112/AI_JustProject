# BFF 架構

## 定位
BFF（Backend for Frontend）用於整合前端所需資料、封裝多服務協調與降低客戶端複雜度。

## 為何需要 BFF
- Web / Mobile / Admin 所需資料格式不同
- 避免前端直接拼接多個微服務
- 可統一權限、聚合、轉換與快取策略

## 建議 BFF 分類
- web-bff
- mobile-bff
- admin-bff

## 責任
- API 聚合
- 權限檢查
- 回應格式標準化
- 前端特定流程封裝

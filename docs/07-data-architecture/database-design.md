# Database Design

## 主要資料庫
- MySQL：核心交易與結構化資料
- Redis：快取、session、暫存狀態
- MongoDB：文件、對話紀錄、非結構資料

## 原則
- 重要資料不可只存在 Redis
- 資料結構需配合備份與回存策略
- 環境資料隔離必須明確

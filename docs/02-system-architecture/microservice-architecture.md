# Microservice Architecture

版本：v0.5.1

## 服務切分
1. Identity / Auth
2. Project / Task
3. Testing / Deployment
4. Notification / Reporting
5. AI Management / DR

## 原則
1. 依業務能力切分，而非 UI 切分
2. 服務間通訊以 API + Event 為主
3. 每個服務需可獨立部署、觀測與回滾

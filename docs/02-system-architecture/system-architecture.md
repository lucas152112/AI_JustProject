# System Architecture

版本：v0.5.1

## 系統組成
核心模組：
1. Frontend（Web / Flutter）
2. Admin Backend
3. API Gateway
4. BFF Layer
5. Microservices
6. Communication Service
7. AI Services
8. CI/CD System
9. Kubernetes Infrastructure

## 核心域
1. 協作域：User、Role、Project、Task
2. 交付域：Testing、Deployment、Microservice
3. 智能域：AI Development、Model Router、Bug Fix
4. 治理域：Reporting、Communication、DR、Settings

## 設計原則
1. 以前後台 + BFF + 微服務分層
2. 以事件驅動串接跨模組流程
3. 全鏈路具備通知、審計與報表能力

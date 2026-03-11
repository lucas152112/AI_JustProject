# Backend Architecture

版本：v0.5.1

## 後端核心
1. API Gateway
2. BFF
3. Backend Microservices
4. Communication Service
5. AI Services

## 分層原則
1. Gateway 做入口治理
2. BFF 做查詢聚合
3. 微服務承載業務能力
4. 背景工作負責非同步處理

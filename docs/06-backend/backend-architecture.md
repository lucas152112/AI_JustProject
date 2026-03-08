# Backend Architecture

## 技術選型
- Language：Rust
- Framework：Axum
- Style：Microservices API

## 後端責任
- 提供前端與管理後台 API
- 協調資料層與事件流
- 封裝 AI、報告、通訊與權限能力

## 分層
- API Gateway / Ingress
- BFF
- Domain Services
- Event / Background Jobs

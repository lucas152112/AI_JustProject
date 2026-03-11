# API Design

版本：v0.5.1

## API 原則
1. 以資源導向為主，動作型接口僅用於 deploy、rollback 等執行操作
2. 回應包含 trace ID、分頁、錯誤碼
3. 高風險 API 需審計與冪等控制

## 核心資源
1. users / roles / projects / tasks
2. tests / releases / services
3. notifications / reports / settings

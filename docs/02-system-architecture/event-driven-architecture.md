# 事件驅動架構

## 使用場景
- 通知推送
- 報表產生
- AI 任務完成事件
- E2E / 測試結果回報
- 部署與告警事件轉送

## 設計原則
- 同步請求處理核心流程
- 非同步事件處理通知、報表與背景作業
- 事件需要可追蹤與可重試

## 典型事件
- task.completed
- test.failed
- e2e.failed
- deploy.succeeded
- deploy.failed
- ai.fix.generated

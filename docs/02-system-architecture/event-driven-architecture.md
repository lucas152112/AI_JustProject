# Event Driven Architecture

版本：v0.5.1

## 目標
以事件驅動串接任務、測試、部署、通知與報表更新。

## 主要事件
1. TaskCreated / TaskStatusChanged
2. TestFailed / TestPassed
3. ReleaseStarted / ReleaseRolledBack
4. AlertRaised / DRTriggered

## 設計原則
1. 業務事件與通知事件分離
2. 關鍵事件保留重試與死信處理
3. 事件需具追蹤 ID

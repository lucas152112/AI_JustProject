# Architecture Overview

版本：v0.5.1

## 概覽
平台由前台工作區、後台管理台、BFF、後端微服務、AI 協作層、測試部署鏈路與通訊通知層組成。

## 核心分層
1. Client：Web Admin、Web Workspace、未來 Flutter App / H5
2. Access：Nginx / API Gateway / Auth
3. Application：Project、Task、Testing、Deployment、Reporting 等服務
4. AI Layer：Codex CLI、Aider、OpenRouter、Local Model
5. Platform：Kubernetes、Tekton、Observability、Secrets
6. Data：MySQL、MongoDB、Redis、Object Storage

## 設計原則
1. 事件驅動串接跨模組流程
2. 高風險動作具備審批、審計與回滾能力
3. 測試與部署流程預設自動化
4. 關鍵資料、通知與報表可跨模組追蹤

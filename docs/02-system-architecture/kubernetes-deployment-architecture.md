# Kubernetes Deployment Architecture

版本：v0.5.1

## 目標
以 Kubernetes 承載前端、BFF、微服務、背景工作與 AI 相關服務。

## 元件
1. Ingress / Gateway
2. Deployments / StatefulSets
3. ConfigMap / Secret
4. HPA / PDB / CronJob

## 原則
1. 環境隔離
2. 設定與密鑰分離
3. 滾動升級與回滾可用

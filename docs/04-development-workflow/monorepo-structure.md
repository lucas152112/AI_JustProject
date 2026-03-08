# Monorepo Structure

## 建議結構
```text
ai-just-project/
├─ frontend/
│  ├─ web/
│  └─ admin/
├─ mobile/
│  └─ flutter-app/
├─ backend/
│  ├─ gateway/
│  ├─ bff/
│  └─ services/
├─ ai/
│  ├─ bugfix-agent/
│  ├─ prompts/
│  └─ model-router/
├─ deploy/
│  ├─ helm/
│  ├─ k8s/
│  └─ scripts/
└─ docs/
```

## 原則
- 文件與程式碼同 repo 管理
- 部署配置與應用版本一併管理

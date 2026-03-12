# Repo Bootstrap Checklist

版本：v0.6.1

## Phase 0 已建立
1. Root workspace 設定
2. `apps/admin`
3. `apps/workspace`
4. `apps/bff`
5. `services/identity`
6. `services/project`
7. `services/task`
8. `services/testing`
9. `services/deployment`
10. `packages/types`
11. `packages/config`
12. `packages/ui`
13. `infra/k8s`
14. `infra/tekton`
15. `.env.example`

## 下一步
1. 補 package manager lock 與實際依賴
2. 選定前端框架與後端 runtime
3. 建 migration / schema 初版
4. 建 auth / project / task API 入口

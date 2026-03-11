# Technical Deliverables

版本：v0.6.0

## Repo 結構
1. `apps/admin`
2. `apps/workspace`
3. `apps/bff`
4. `services/identity`
5. `services/project`
6. `services/task`
7. `services/testing`
8. `services/deployment`
9. `packages/ui`
10. `packages/config`
11. `packages/types`
12. `infra/k8s`
13. `infra/tekton`

## 第一批 schema
1. users
2. roles
3. permissions
4. projects
5. project_members
6. tasks
7. task_comments
8. task_activity_logs
9. test_runs
10. test_cases
11. releases
12. deployments
13. notifications
14. audit_logs

## 第一批 API
1. `POST /auth/login`
2. `GET /me`
3. `GET/POST /projects`
4. `GET/PATCH /projects/:id`
5. `GET/POST /tasks`
6. `GET/PATCH /tasks/:id`
7. `POST /tasks/:id/comments`
8. `GET /testing/runs`
9. `GET /deployments/releases`
10. `GET /notifications`

## 第一批前端畫面
1. Login
2. Admin Dashboard
3. Project List / Detail
4. Task List / Board / Detail
5. Workspace Home
6. Testing Report List
7. Release List
8. Notification Center

## 驗收條件
1. 完成主要登入與權限流程
2. 完成專案與任務主鏈路
3. 完成測試與部署只讀觀測
4. 完成通知中心最小功能
5. 可在 dev 環境跑通基本流程

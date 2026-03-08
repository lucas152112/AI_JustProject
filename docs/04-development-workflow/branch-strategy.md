# Branch Strategy

## 建議分支
- main / master：正式穩定分支
- develop：日常整合分支
- feature/*：功能開發
- release/*：預發佈
- hotfix/*：緊急修正

## 搭配 CI 規則
- feature/* push：compile + unit test
- develop push：compile + unit test
- release/*：可擴充為 unit test + E2E
- main：正式 release pipeline

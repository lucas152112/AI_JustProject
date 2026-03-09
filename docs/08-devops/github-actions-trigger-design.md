# GitHub Actions Trigger Design

GitHub Actions 主要用於程式開發階段。

當開發者完成某個功能並補齊單元測試後，於 commit / push 時：
- GitHub Actions 接收事件
- 依規則觸發 Tekton
- Tekton 執行編譯與測試

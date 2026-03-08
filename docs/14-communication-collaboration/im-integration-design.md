# IM Integration Design

## 通道定位
- Telegram：個人 / 小團隊通知與 Bot 操作
- Discord：技術協作與分頻道討論
- LINE：台灣常用外部通知通道
- fastIM：平台內建協作核心

## 服務建議
- communication-service
  - telegram-adapter
  - discord-adapter
  - line-adapter
  - fastim-adapter
  - notification-engine
  - bot-command-handler

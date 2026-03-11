# Model Router Design

版本：v0.5.1

## 模型策略
1. Primary：DeepSeek Coder V3.2
2. Fallback：Qwen3 Coder 32B

## 路由維度
1. 任務類型
2. 成本上限
3. 延遲與上下文長度
4. 歷史成功率

## 原則
1. 失敗可切換 fallback
2. 所有切換需記錄在模型統計中

---
title: 配置国际化
order: 0
group:
  title: 基础组件
---

## 配置国际化

```tsx
/**
 * title: 描述
 * desc: 嵌套外层
 * compact: true
 * defaultShowCode: true
 */
import React from 'react';
import { ConfigProvider } from 'st-react-ui';
import enUS from 'st-react-ui/es/local/en_Us';

export default () => {
  return (
    <ConfigProvider local={enUS}>
      <div />
    </ConfigProvider>
  );
};
```

## API

| 属性  | 说明       | 类型   | 默认值 |
| ----- | ---------- | ------ | ------ |
| local | 国际化配置 | ILocal | zh_CN  |

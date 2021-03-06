---
title: Tag 标签
order: 4
group:
  title: 基础组件
---

## Tag

### Style

```tsx
import React from 'react';
import { Tag } from 'stui';

export default () => (
  <>
    <Tag>Primary主要</Tag>
    <Tag type="warning">Warning警告</Tag>
    <Tag type="danger">Danger危险</Tag>
    <Tag type="default">Default信息</Tag>
    <Tag type="success">Success成功</Tag>
  </>
);
```

### Plain

```tsx
import React from 'react';
import { Tag } from 'stui';

export default () => (
  <>
    <Tag plain>Primary主要</Tag>
    <Tag type="warning" plain>
      Warning警告
    </Tag>
    <Tag type="danger" plain>
      Danger危险
    </Tag>
    <Tag type="default" plain>
      Default信息
    </Tag>
    <Tag type="success" plain>
      Success成功
    </Tag>
  </>
);
```

### Size

```tsx
import React from 'react';
import { Tag } from 'stui';

export default () => (
  <>
    <Tag>Primary主要</Tag>
    <Tag size="small">Primary主要</Tag>
    <Tag size="large">Primary主要</Tag>
  </>
);
```

### Close

```tsx
import React from 'react';
import { Tag, Message } from 'stui';

export default () => (
  <>
    <Tag onClose={() => Message.show('closed')}>Primary主要</Tag>
    <Tag onClose={() => Message.show('closed')} size="small" plain>
      镂空小按钮
    </Tag>
  </>
);
```

## API

| 属性    | 说明     | 类型                                   | 默认值  |
| ------- | -------- | -------------------------------------- | ------- |
| type    | 类型     | primary/warning/danger/default/success | primary |
| plain   | 是否镂空 | boolean                                | false   |
| size    | 按钮尺寸 | normal/large/small                     | normal  |
| onClick | 点击事件 | function                               |         |
| onClose | 关闭事件 | function                               |         |

---
title: Message 弹框
order: 5
group:
  title: 基础组件
---

## Message

### Type `String` 按钮状态

> "primary" | "default" | "warning" | "danger" | "success"

type="primary" `默认值`

```tsx
import React from 'react';
import { Button, Message } from 'stui';

const handleClick = (type = 'primary') => {
  Message.show({ type, content: `${type} message` });
};

export default () => (
  <div>
    <Button
      onClick={() => {
        handleClick();
      }}
    >
      {' '}
      Button{' '}
    </Button>
    <Button
      type="default"
      onClick={() => {
        handleClick('default');
      }}
    >
      {' '}
      Button{' '}
    </Button>
    <Button
      type="warning"
      onClick={() => {
        handleClick('warning');
      }}
    >
      {' '}
      Button{' '}
    </Button>
    <Button
      type="danger"
      onClick={() => {
        handleClick('danger');
      }}
    >
      {' '}
      Button{' '}
    </Button>
    <Button
      type="success"
      onClick={() => {
        handleClick('success');
      }}
    >
      {' '}
      Button{' '}
    </Button>
  </div>
);
```

### Plain `Boolean` 是否镂空

plain={false} `默认值`

```tsx
import React from 'react';
import { Button, Message } from 'stui';

export default () => (
  <Button onClick={() => Message.show({ plain: true, content: 'plain message' })} plain>
    Show Plain
  </Button>
);
```

### Duration `number` 延时时间

duration={3000} `默认值`

```tsx
import React from 'react';
import { Button, Message } from 'stui';

export default () => (
  <Button
    onClick={() =>
      Message.show({
        type: 'primary',
        content: 'This is 5s remove',
        duration: 5000,
      })
    }
  >
    Duration Message
  </Button>
);
```

## API

| 属性     | 说明             | 类型                                   | 默认值  |
| -------- | ---------------- | -------------------------------------- | ------- |
| top      | 距离顶部距离     | string/number                          | 8px     |
| zIndex   | 层级             | number                                 | 1024    |
| duration | 显示持续时间(ms) | number                                 | 3000    |
| type     | 类型             | primary/warning/danger/default/success | primary |
| content  | 内容             | React.ReactNode                        |         |
| loading  | 是否加载中       | boolean                                | false   |
| plain    | 是否镂空         | boolean                                | false   |

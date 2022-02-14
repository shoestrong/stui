---
title: 按钮
order: 1
group:
  title: 基础组件
---

## 按钮

### Type: `String` 按钮类型

1. type="primary" `默认值`

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => <Button type="primary">Primary Button</Button>;
```

2. type="warning"

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => <Button type="warning">Warning Button</Button>;
```

3. type="danger"

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => <Button type="danger">Danger Button</Button>;
```

4. type="success"

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => <Button type="success">Success Button</Button>;
```

5. type="default"

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => <Button type="default">Default Button</Button>;
```

### Plain: `Boolean` 是否镂空

plain={false} `默认值`

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => (
  <Button type="primary" plain>
    {' '}
    Plain Primary Button{' '}
  </Button>
);
```

### size="large"

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => (
  <>
    large:{' '}
    <Button type="primary" size="large">
      {' '}
      Large Primary Button{' '}
    </Button>
    <br />
    <br />
    default: <Button type="primary">Noraml Plain Primary Button</Button>
    <br />
    <br />
    small:{' '}
    <Button type="primary" size="small">
      {' '}
      Small Primary Button{' '}
    </Button>
  </>
);
```

<!-- ### Loading

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => (
  <>
    <Button type="primary" loading>
      Loading
    </Button>
    <Button type="primary" loading size="large">
      Loading
    </Button>
    <Button type="primary" loading size="small">
      Loading
    </Button>
  </>
);
``` -->

### Block

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => (
  <Button type="primary" block onClick={() => console.log(44)}>
    Block Primary Button
  </Button>
);
```

### Disabled

```tsx
import React from 'react';
import { Button } from 'st-react-ui';

export default () => (
  <Button type="primary" disabled>
    Disabled Primary Button
  </Button>
);
```

## API

| 属性     | 说明            | 类型                                   | 默认值  |
| -------- | --------------- | -------------------------------------- | ------- |
| type     | 类型            | primary/warning/danger/default/success | primary |
| disabled | 是否禁用        | boolean                                | false   |
| block    | 是否 block 按钮 | boolean                                | false   |
| plain    | 是否镂空        | boolean                                | false   |
| size     | 按钮尺寸        | normal/large/small                     | normal  |
| loading  | 是否加载中      | boolean                                | false   |
| onClick  | 点击事件        | function                               |         |

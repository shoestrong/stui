---
title: Select 选择框
order: 3
group:
  title: 基础组件
---

## Select 选择框

### Size: `String` "normal" | "small" | "large" 按钮尺寸

1. size='normal' `默认值`

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';
export default () => (
  <Select>
    <SelectItem value={'A'}>选项A</SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'}>选项D</SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

2. size='small'

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';

export default () => (
  <Select size="small">
    <SelectItem value={'A'}>选项A</SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'}>选项D</SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

3. size='large'

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';

export default () => (
  <Select size="large">
    <SelectItem value={'A'}>选项A</SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'}>选项D</SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

### Disabled: `Boolean` 全局禁用

1. disabled='true' Select 全局禁用

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';

export default () => (
  <Select disabled>
    <SelectItem value={'A'}>选项A</SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'}>选项D</SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

2. disabled='true' SelectItem 部分禁用

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';

export default () => (
  <Select>
    <SelectItem value={'A'} disabled>
      选项A
    </SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'} disabled>
      选项D
    </SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

### Multiple: `Boolean` 多选模式

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';

export default () => (
  <Select multiple>
    <SelectItem value={'A'}>选项A</SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'}>选项D</SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

### DefaultValue: `Array` 默认值

```tsx
import React from 'react';
import { Select, SelectItem } from 'st-react-ui';

export default () => (
  <Select multiple defaultValue={['A', 'E']} onChange={(val) => console.log(val)}>
    <SelectItem value={'A'}>选项A</SelectItem>
    <SelectItem value={'B'}>选项B</SelectItem>
    <SelectItem value={'C'}>选项C</SelectItem>
    <SelectItem value={'D'}>选项D</SelectItem>
    <SelectItem value={'E'}>选项E</SelectItem>
  </Select>
);
```

## API

### Select

| 属性         | 说明         | 类型               | 默认值    |
| ------------ | ------------ | ------------------ | --------- |
| multiple     | 是否多选     | boolean            | false     |
| disabled     | 是否禁用     | boolean            | false     |
| size         | 尺寸         | normal/large/small | normal    |
| onChange     | 值变化事件   | function(val:any)  |           |
| defaultValue | 初始化默认值 | any                | undefined |

### SelectItem

| 属性     | 说明     | 类型                                      | 默认值    |
| -------- | -------- | ----------------------------------------- | --------- |
| disabled | 是否禁用 | boolean                                   | false     |
| value    | 值       | any                                       | undefined |
| onClick  | 点击事件 | function(value: any, e: React.MouseEvent) |           |

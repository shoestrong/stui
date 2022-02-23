---
title: Checkbox 复选框
order: 2
group:
  title: 基础组件
---

## Checkbox 复选框

### Value: `Boolean` Checkbox 基本

```tsx
import React from 'react';
import { Checkbox } from 'stui';

export default () => <Checkbox>中文</Checkbox>;
```

### Value: `Array` CheckboxGroup 集合 复选框

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from 'stui';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map((item) => {
          return (
            <div key={item.id}>
              <Checkbox value={item.id}>{item.name}</Checkbox>
            </div>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### Disabled: `Boolean` 禁用

1. CheckboxGroup 全部禁用

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from 'stui';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} disabled onChange={setValList}>
        {dataList.map((item) => {
          return (
            <div key={item.id}>
              <Checkbox value={item.id}>{item.name}</Checkbox>
            </div>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

2. Checkbox 部分禁用

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from 'stui';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2', disabled: true },
    { id: 3, name: '张三3', disabled: true },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map((item) => {
          return (
            <div key={item.id}>
              <Checkbox value={item.id} disabled={item.disabled}>
                {item.name}
              </Checkbox>
            </div>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### 行级标签

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from 'stui';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked：{JSON.stringify(valList)}</div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map((item) => {
          return (
            <Checkbox key={item.id} value={item.id} disabled={item.disabled}>
              {item.name}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

### 关联行级

```tsx
import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from 'stui';

export default () => {
  const [valList, setValList] = useState([2, 3]);

  const dataList = [
    { id: 1, name: '张三1' },
    { id: 2, name: '张三2' },
    { id: 3, name: '张三3' },
    { id: 4, name: '张三4' },
  ];
  return (
    <>
      <div>checked: {JSON.stringify(valList)}</div>
      <div>
        <Checkbox
          checked={valList.length === dataList.length}
          onChange={(e) => setValList(e.target.checked ? dataList.map((v) => v.id) : [])}
          indeterminate={
            valList.length == 0 || valList.length === dataList.length
            // valList.length !== 0 && valList.length < dataList.length
          }
        >
          全选
        </Checkbox>
      </div>
      <CheckboxGroup value={valList} onChange={setValList}>
        {dataList.map((item) => {
          return (
            <Checkbox key={item.id} value={item.id} disabled={item.disabled}>
              {item.name}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </>
  );
};
```

## API

### Checkbox

| 属性          | 说明     | 类型     | 默认值 |
| ------------- | -------- | -------- | ------ |
| checked       | 是否选定 | boolean  | false  |
| disabled      | 是否禁用 | boolean  | false  |
| indeterminate | 是否全选 | boolean  | false  |
| onChange      | 点击事件 | function |        |
| value         | 值       | any      |        |

### CheckboxGroup

| 属性     | 说明     | 类型     | 默认值 |
| -------- | -------- | -------- | ------ |
| disabled | 是否禁用 | boolean  | false  |
| onChange | 点击事件 | function |        |
| value    | 值       | any      |        |

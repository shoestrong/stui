---
title: Drag 拖拽
order: 6
group:
  title: 基础组件
---

## Drag

```tsx
import React, { useRef, useEffect } from 'react';
import { Drag, Button } from 'stui';

export default () => {
  const dragRef = useRef();
  const wrapperRef = useRef();
  let dragBox = null;

  const initMove = () => {
    dragBox = new Drag(dragRef.current, wrapperRef.current, false);
    dragBox.init();
  };

  const removeMove = () => {
    if (!dragBox) {
      return;
    }
    dragBox.remove();
  };

  useEffect(() => {
    initMove();
    return () => {
      removeMove();
    };
  });

  return (
    <div style={{ height: '80px' }}>
      <div ref={wrapperRef} style={{ position: 'absolute', marginTop: '40px', userSelect: 'none' }}>
        <div ref={dragRef} style={{ cursor: 'move' }}>
          按住这里可以移动
        </div>
        <div>我是可以移动的</div>
      </div>
      <Button
        onClick={() => {
          dragBox.reset();
        }}
      >
        重置位置
      </Button>
    </div>
  );
};
```

## API

| 属性        | 说明              | 类型        | 默认值 |
| ----------- | ----------------- | ----------- | ------ |
| drag        | 被按住 dom        | HTMLElement |        |
| wrap        | 被移动 dom        | HTMLElement |        |
| isCheckBody | 是否需要超出 body | boolean     | false  |
| init        | 启动移动          | function    |        |
| remove      | 停止移动          | function    |        |

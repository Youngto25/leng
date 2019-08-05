---
title: Popover
sidebarDepth: 2
---
# Popover

## 引入
```
import { Button , Popover } from 'lengzi'
```

## 使用组件
```
Vue.component('g-button',Button)
Vue.component('g-popover',Popover)
```

## 相关属性
- position，浮层出现的的位置，有 top bottom left right 四个值可选，默认为 top
- trigger，表示是哪个触发方式，有 click 及 hover ，默认为click

## 使用方法
### click
<ClientOnly>
 <popover-demo-1/>
</ClientOnly>

### hover
<ClientOnly>
 <popover-demo-2/>
</ClientOnly>
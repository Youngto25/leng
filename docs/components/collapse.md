---
title: Collapse
sidebarDepth: 2
---
# Collapse

## 引入
```
import { Collapse , CollapseItem } from 'lengzi'
```

## 使用组件
```
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
```

## 相关属性
- single，表示是否单个显示，默认为false
- name，需要为每个g-collapse-item设置一个独一无二的name值
- selectedTab2，一个数组，表示默认开启的。数组的内容就是每个collapse-item的name值

## 使用方法
### single为false，默认开启name=1
<ClientOnly>
  <collapse-demo/>
</ClientOnly>

### single为true，默认开启name=1
<ClientOnly>
  <collapse-demo2/>
</ClientOnly>

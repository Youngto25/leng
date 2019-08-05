---
title: Layout
sidebarDepth: 2
---
# Layout

## 引入
```
import { Layout , Sider , Content, Header, Footer } from 'lengzi'
```

## 使用组件
```
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
```

## 使用方法
### 上中下布局
<ClientOnly>
  <layout-demo-1/>
</ClientOnly>

### 中间侧边栏
#### 原理
Layout组件查看自己的子组件中是否存在Sider组件，若存在则更改flex-direction方向。
```
this.$children.forEach(child)=>{
  if(child.$options.name === 'Sider'){
    ........
  }
}
```
<ClientOnly>
  <layout-demo-2/>
</ClientOnly>

### 侧边栏
<ClientOnly>
  <layout-demo-3/>
</ClientOnly>
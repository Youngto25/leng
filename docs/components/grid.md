---
title: Grid
sidebarDepth: 2
---
# Grid

## 引入
```
import { Row , Col } from 'lengzi'
```

## 使用组件
```
Vue.component('g-row',Row)
Vue.component('g-col',Col)
```

## 相关属性
- gutter，在g-row标签上设置gutter属性(单位为像素)，表示每个内容之间的间隔
- span，在g-col标签上设置span属性，指内容占据多少格。总共为24格
- offset，在g-col标签上设置offset属性(多少网格),表示此内容左侧有多少网格
- ipad, narrowPc, pc, widePc，在g-col上设置属性ipad={span: 8,offset: 2}表示在ipad上显示时的样式
- 屏幕宽度小于577px为默认的写法(如：span="8" offset="2")
- ipad，min-width = 577px
- narrowPc，min-width = 769px
- pc，min-width = 993px
- widePc，min-width = 1201px

## 使用方法
### 24格网格
<ClientOnly>
  <grid-demo-1/>
</ClientOnly>

### 设置gutter
<ClientOnly>
  <grid-demo-2/>
</ClientOnly>

### 设置空隙
<ClientOnly>
  <grid-demo-3/>
</ClientOnly>
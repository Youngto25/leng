---
title: Button
sidebarDepth: 2
---
# Button

## 引入
```
import { Button , ButtonGroup } from 'lengzi'
```

## 使用组件
```
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
```

## 相关属性
- icon，用来设置按钮icon的类型，常用的有setting loading info error left right download thumbs-up
- loading，设置是否为loading状态，默认值为false
- 当button被点击时，可以切换状态。需要先绑定loading属性，通过切换属性的值来改变是否为loading
- iconPosition，设置icon的位置，默认值为left

当icon属性与loading属性同时存在时，先判断loading的值，若为true，则只显示loading，否则显示icon

## 使用方法
### 单个button使用
<ClientOnly>
  <button-demo1></button-demo1>
</ClientOnly>

### 多个button组合使用
<ClientOnly>
  <button-demo2></button-demo2>
</ClientOnly>

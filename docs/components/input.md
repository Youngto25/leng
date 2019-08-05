---
title: Input
sidebarDepth: 2
---
## 引入
```
import { Input } from 'lengzi'
```

## 使用组件
```
Vue.component('g-input',Input)
```

## 相关属性
- value,可以设置默认值
- disabled状态
- readonly状态
- 可以进行双向绑定，只要

## 使用方法
### 简单使用
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

### 双向绑定
<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

### 思路
父组件双向绑定一个数值value，并将value传给子组件，子组件利用props获得父组件传入的value绑定给属性value。当input输入内容时，触发change事件，并传递输入的值。父组件触发传递过来的change事件，并将所得到的值赋值给value。
```
父组件
<g-input v-model="value"></g-input>

data(){
  return {
    value: 1
  }
}

```

```
Input组件
<input :value="value" @change="$emit('change',$event.target.value)">

props: {
  value: {
    type: String
  }
}
```
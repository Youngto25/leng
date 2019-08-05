---
title: Toast
sidebarDepth: 2
---
# Toast

## 引入
```
import { Toast , plugin, } from 'lengzi'
```

## 使用组件
```
Vue.component('g-toast',Toast)
Vue.use(plugin)
```

## 相关属性
```
<g-button 
  @click="this.$toast('',
                      {
                        closeButton: {text: '',callback(){}},
                        position: '',
                        enableHTML: Boolean,
                        autoClose: 
                        [Boolean,Number]
                        }
                      )
>
```
- 字符串位置表示提醒的内容
- closeButton，text表示关闭按钮所显示的内容，第二个参数是回调的函数。默认text：'关闭'，callback: undefined
- enableHTML，Boolean类型，提示的内容若是HTML是否会被渲染
- position，表示出现的位置，有top bottom middle 三个值
- autoClose，可以是Boolean，也可以是Number(表示n秒后自动关闭)，默认5秒后关闭


## 使用方法
<ClientOnly>
  <toast-demo-1/>
</ClientOnly>

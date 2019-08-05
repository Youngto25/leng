---
title: Tabs
sidebarDepth: 2
---
# Tabs

## 引入
```
import { Tabs , TabsBody , TabsHead , TabsItem , TabsPane } from 'lengzi'
```

## 使用组件
```
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
```

## 使用方法

### 简单用法

<ClientOnly>
  <tabs-demo-1/>
</ClientOnly>

### 思路
Tabs组件上声明一个eventBus，并将其注入到其内部的组件中，监听事件。子组件发生的操作先告知父组件，再由父组件通知子组件该进行的操作。

```
Tabs组件
data(){
  return {
    eventBus: new Vue()
  }
},
provide(){
  return {
    eventBus: this.eventBus
  }
},
mounted(){
  this.eventBus.$on('getMessage',(m,n)=>{
    this.eventBus.$emit('update:selected',m,n)
  })
}
```

```
TabsItem子组件，当被点击时，将组件的信息传递给父组件
mounted(){
  this.eventBus.$on('update:selected',(name)=>{
    if(this.name === name){
      this.active = true
    }else{
      this.active = false
    }
  })
},
methods:{
  xxx(){
    if(this.disabled){
      return 
    }
    this.eventBus.$emit('getMessage',this.name,this)
  }
}

```
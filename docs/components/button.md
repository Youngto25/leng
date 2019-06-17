---
title: Button
sidebarDepth: 2
---
# Button

## 使用方法
传入属性
- icon，用来设置按钮icon的类型，常用的有setting loading info error left right download thumbs-up
- loading，设置是否为loading状态，默认值为false
- iconPosition，设置icon的位置，默认值为left

当icon属性与loading属性同时存在时，先判断loading的值，若为true，则只显示loading，否则显示icon
<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

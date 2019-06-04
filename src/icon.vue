<template>
    <svg class="g-icon">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
    export default{
      props: ['name']
    }
</script>
<style lang="scss" scoped>
    .g-icon{
      width: 1.2em;
      height: 1.2em;
    }
</style>
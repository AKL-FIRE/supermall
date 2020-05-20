<template>
  <!-- ref如果是绑定在组件中的，那么通过this.$refs.name获取到的是子组件实例 -->
  <!-- ref如果是绑定在普通元素上，那么通过this.$refs.name获取到的是这个DOM元素 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>

</style>

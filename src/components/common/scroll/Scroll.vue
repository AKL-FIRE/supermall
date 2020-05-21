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
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1. 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      // 2.监听滚动的位置
      this.scroll.on('scroll', position => {
        this.$emit('scrolling', position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pulling-up');
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time);
      },
      finishPullingUp() {
        this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list"
           :src="item"
           :key="index"
           @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
        // 判断所有图片都加载完了，盒子高度已经确定，进行一次自定义事件发生，让BetterScroll刷新高度
        if(++this.counter === this.imagesLength) {
          this.$emit('image-load');
        }
      }
    },
    watch: {
      // 监听属性detailInfo的变化，发生变化就执行该函数
      detailInfo() {
        this.imagesLength = this.detailInfo.datailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    margin-top: 10px;
    border-top: 3px solid rgba(0, 0, 0, .1);
    padding: 15px;
  }
  .start,
  .end {
    position: relative;
    width: 90px;
    height: 2px;
    background-color: #ccc;
  }
  .end {
    float: right;
  }
  .desc {
    margin: 10px 0;
  }
  .start::before {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    background-color: black;
    display: block;
    top: -5px;
    left: 0;
  }
  .end::before {
    position: absolute;
    content: "";
    height: 5px;
    width: 5px;
    background-color: black;
    display: block;
    top: -5px;
    right: 0;
  }
  .info-key {
    margin: 10px 0;
    color: black;
  }
  .info-list img {
    width: 100%;
  }
</style>

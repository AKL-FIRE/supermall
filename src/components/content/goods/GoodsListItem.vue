<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 50%;
    float: left;
    padding: 5px;
    font-size: 14px;
  }
  .goods-item img {
    width: 100%;
  }
  .goods-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 3px;
    margin-bottom: 3px;
  }
  .goods-item .price {
    color: var(--color-high-text);
    margin-left: 30%;
  }
  .goods-item .collect {
    margin-left: 5px;
  }
  .goods-item .collect::before {
    content: "";
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") no-repeat;
    /*background-color: pink;*/
    background-size: 14px 14px;
    display: inline-block;
  }
</style>

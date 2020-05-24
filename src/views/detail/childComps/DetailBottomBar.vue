<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar"
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #f6f5f5;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
  .bar-left {
    flex: 1;
  }
  .bar-right {
    flex: 1;
  }
  .bar-item {
    display: flex;
    font-size: 14px;
  }
  .bar-item div {
    /*float: left;*/
    flex: 1;
  }
  .icon {
    display: block;
    height: 25px;
    width: 25px;
    background: url("~assets/img/detail/detail_bottom.png");
    background-size: 25px;
    margin: 3px auto;
  }
  .text {
    display: block;
    width: 32px;
    margin: 0 auto;
  }
  .service {
    background-position: 0 -60px;
  }
  .shop {
    background-position: 0 -111px;
  }
  .select {
    background-position: 0 0;
  }
  .cart,
  .buy {
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 49px;
  }
  .cart {
    color: black;
    background-color: #ffdd0f;
  }
  .buy {
    color: white;
    background-color: var(--color-tint);
  }
</style>

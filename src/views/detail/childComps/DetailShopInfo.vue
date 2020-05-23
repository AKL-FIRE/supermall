<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | formatText}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" class="row">
            <td>{{item.name}}</td>
            <td :class="{'great-score': item.isBetter}" class="score">{{item.score}}</td>
            <td>
              <span :class="{'great-text': item.isBetter}" class="text">{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    },
   filters: {
      formatText(text) {
        return (parseInt(text) / 10000).toFixed(1) + '万';
      }
   }
  }
</script>

<style scoped>
  .shop-info {
    padding: 15px;
  }
  .shop-top {
    height: 50px;
    position: relative;
  }
  .shop-top img {
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 30px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .shop-top span {
    line-height: 50px;
    position: absolute;
    left: 60px;
    top: 0;
  }
  .shop-middle {
    margin-top: 30px;
    height: 70px;
    display: flex;
  }
  .shop-middle-item {
    width: 50%;
    height: 100%;
  }
  .shop-middle-item div {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
  }
  .shop-middle-right table {
    display: flex;
    font-size: 14px;
    flex-direction: column;
  }
  .shop-middle-left div {
    flex: 1;
    justify-content: space-evenly;
  }
  .info-sells,
  .info-goods {
    height: 100%;
    position: relative;
  }
  .sells-count,
  .goods-count {
    position: absolute;
    font-size: 16px;
    font-weight: 700;
    left: 50%;
    transform: translateX(-50%);
    top: 25%;
  }
  .sells-text,
  .goods-text {
    position: absolute;
    font-size: 14px;
    left: 50%;
    transform: translateX(-50%);
    top: 60%;
    white-space: nowrap;
  }
  .great-score {
    color: orangered!important;
  }
  .score {
    color: forestgreen;
  }
  .great-text {
    width: 14px;
    color: #fff;
    background-color: orangered!important;
  }
  .text {
    color: #fff;
    background-color: forestgreen;
  }
  .row {
    margin-bottom: 10px;
    display: flex;
    text-align: center;
  }
  .row td {
    flex: 1;
  }
  .shop-bottom {
    margin-top: 24px;
  }
  .enter-shop {
    height: 35px;
    width: 120px;
    background-color: #e5e5e5;
    margin: 0 auto;
    text-align: center;
    line-height: 35px;
    border-radius: 10px;
  }
</style>

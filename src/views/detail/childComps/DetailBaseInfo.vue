<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span>{{goods.newPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-servie-item"
            v-for="index in goods.services.length - 1"
            :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 15px;
  }
  .info-title {
    font-size: 16px;
    font-weight: 700;
  }
  .info-price {
    margin-top: 10px;
  }
  .info-price span:first-child {
    color: var(--color-high-text);
    font-size: 20px;
  }
  .info-price span:nth-child(2) {
    font-size: 14px;
    margin-left: 7px;
    text-decoration: line-through;
    color: #9a9797;
  }
  .info-price span:last-child {
    font-size: 14px;
    margin-left: 7px;
    background-color: var(--color-tint);
    color: #fff;
    border-radius: 8px;
    padding: 2px;
  }
  .info-other {
    margin-top: 15px;
    font-size: 14px;
    color: #9a9797;
    display: flex;
  }
  .info-other span {
    text-align: center;
    flex: 1;
  }
  .info-other span:first-child {
    text-align: left;
  }
  .info-other span:last-child {
    text-align: right;
  }
  .info-service {
    margin-top: 15px;
    font-size: 14px;
    color: #9a9797;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 3px solid rgba(0, 0, 0, .1);
    white-space: nowrap;
  }
  .info-service span {
    flex: 1;
    text-align: center;
    color: var(--color-text);
  }
  .info-service span:first-child {
    text-align: left;
  }
  .info-service span:last-child {
    text-align: right;
  }
  .info-service img {
    height: 14px;
    margin-right: 5px;
  }
</style>

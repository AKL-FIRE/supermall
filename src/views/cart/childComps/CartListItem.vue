<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked"
                    @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import CheckButton from "../../../components/content/checkButton/CheckButton";

  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked;
      }
    }
  }
</script>

<style scoped>
  .shop-item {
    height: 111px;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #ccc;
  }
  .item-img {
    position: absolute;
    left: 30px;
    top: 15px;
  }
  .item-img img {
    height: 80px;
    width: 55px;
  }
  .item-info {
    position: absolute;
    left: 100px;
    top: 15px;
    width: calc(100% - 115px);
  }
  .item-title,
  .item-desc {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .item-title {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .item-desc {
    font-size: 13px;
    color: #b2b2b2;
  }
  .info-bottom {
    margin-top: 15px;
  }
  .item-price {
    color: #ec792e;
  }
  .item-selector {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
